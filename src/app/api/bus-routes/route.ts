import { NextResponse } from "next/server";
import { type AruthraRoute } from "@/data/travel-data";

export async function GET() {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    const response = await fetch("https://www.redbus.in/travels/aruthra-tours-and-travels", {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
        "Cache-Control": "no-cache",
      },
      signal: controller.signal,
      next: { revalidate: 1800 }, // Cache on server for 30 minutes
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`RedBus responded with HTTP status ${response.status}`);
    }

    const html = await response.text();

    // Extract data-partial objects
    const partialMatches = [...html.matchAll(/data-partial="([^"]+)"/gi)];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let topSdData: any[] | null = null;

    for (const m of partialMatches) {
      try {
        const raw = m[1]
          .replace(/&quot;/g, '"')
          .replace(/&amp;/g, "&")
          .replace(/&#39;/g, "'");
        const parsed = JSON.parse(raw);
        if (
          (parsed.dataType === "TOP_SD_FOR_OP" || parsed.uiComponentId === "C_117") &&
          parsed.content &&
          Array.isArray(parsed.content.data)
        ) {
          topSdData = parsed.content.data;
          break;
        }
      } catch {
        // continue searching
      }
    }

    if (!topSdData || topSdData.length === 0) {
      throw new Error("Could not find TOP_SD_FOR_OP data in RedBus response");
    }

    // Map the live routes
    const liveRoutes: AruthraRoute[] = topSdData.map((item, idx) => {
      const rawLabel: string = item.col1Label || "";
      const parts = rawLabel.split(/\s+to\s+/i);
      const source = parts[0]?.trim() || "Tamil Nadu";
      const destination = parts[1]?.trim() || "Tamil Nadu";

      const fareNum = parseFloat(item.StartingFare || item.finalFareText || "0");
      const busesCount = item.NoOfBuses || "1";
      const busOptionsText = `${busesCount} bus option${busesCount !== "1" ? "s" : ""}`;

      let redBusUrl = "https://www.redbus.in/travels/aruthra-tours-and-travels";
      if (item.col4Link) {
        redBusUrl = item.col4Link.startsWith("http")
          ? item.col4Link
          : `https://www.redbus.in/${item.col4Link.replace(/^\//, "")}`;
      } else if (item.col1Link) {
        redBusUrl = item.col1Link.startsWith("http")
          ? item.col1Link
          : `https://www.redbus.in/${item.col1Link.replace(/^\//, "")}`;
      }

      const firstBus = item.col2Label ? `${item.col2Label}` : "21:00";
      const lastBus = item.col3Label ? `${item.col3Label}` : "23:30";

      const srcLower = source.toLowerCase();
      const category = srcLower.includes("coimbatore")
        ? "coimbatore"
        : srcLower.includes("tirupur")
        ? "tirupur"
        : "return";

      return {
        id: `live-${idx + 1}-${source.toLowerCase().replace(/[^a-z0-9]/g, "")}-${destination.toLowerCase().replace(/[^a-z0-9]/g, "")}`,
        source,
        destination,
        distanceKm: 250,
        duration: "5.0 hrs",
        durationFormatted: "05:00 hrs",
        busOptionsText,
        busType: "A/C Sleeper / Seater (2+1)",
        firstBus,
        lastBus,
        departureWindow: `${firstBus} - ${lastBus}`,
        startingPrice: fareNum || 280,
        startingPriceFormatted: fareNum ? `₹${Math.round(fareNum)}` : "₹280",
        boardingPoints: [`${source} Omni / Central Bus Stand`],
        droppingPoints: [`${destination} Omni / Central Stand`],
        redBusUrl,
        category,
      };
    });

    return NextResponse.json({
      success: true,
      isLive: true,
      source: "redbus.in",
      count: liveRoutes.length,
      lastUpdated: new Date().toISOString(),
      routes: liveRoutes,
    });
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : "Unknown error";
    console.warn("Live RedBus fetch failed:", errMessage);

    return NextResponse.json({
      success: false,
      isLive: false,
      count: 0,
      routes: [],
      error: errMessage,
    });
  }
}
