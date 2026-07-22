import { NextResponse } from "next/server";
import { TelemetryMetrics } from "@/types";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const region = searchParams.get("region") || "us-east";

  // Simulate telemetry based on region
  let baseLatency = 12.5;
  let baseJitter = 0.4;
  let basePacketLoss = 0.001;
  let baseThroughput = 840;

  if (region === "eu-west") {
    baseLatency = 18.2;
    baseJitter = 0.6;
    basePacketLoss = 0.003;
    baseThroughput = 710;
  } else if (region === "ap-south") {
    baseLatency = 45.8;
    baseJitter = 1.2;
    basePacketLoss = 0.012;
    baseThroughput = 480;
  } else if (region === "sa-east") {
    baseLatency = 38.4;
    baseJitter = 0.9;
    basePacketLoss = 0.008;
    baseThroughput = 550;
  }

  // Inject small random fluctuations to simulate live telemetry
  const rand = Math.random();
  const latencyFluctuation = (rand - 0.5) * 2.0; // -1.0ms to +1.0ms
  const jitterFluctuation = (rand - 0.5) * 0.15; // -0.075ms to +0.075ms
  const lossFluctuation = (Math.random() - 0.5) * 0.0005;
  const throughputFluctuation = Math.floor((Math.random() - 0.5) * 40); // -20Mbps to +20Mbps

  const latency = parseFloat(Math.max(1.2, baseLatency + latencyFluctuation).toFixed(3));
  const jitter = parseFloat(Math.max(0.05, baseJitter + jitterFluctuation).toFixed(3));
  const packetLoss = parseFloat(Math.max(0.0, basePacketLoss + lossFluctuation).toFixed(5));
  const throughput = Math.max(10, baseThroughput + throughputFluctuation);

  // Determine operational status
  let status: "optimal" | "warning" | "critical" = "optimal";
  let anomalyDetected = false;

  if (packetLoss > 0.01 || latency > 50) {
    status = "critical";
    anomalyDetected = Math.random() > 0.3; // High chance of anomaly flag under heavy degradation
  } else if (packetLoss > 0.005 || latency > 30 || jitter > 1.0) {
    status = "warning";
    anomalyDetected = Math.random() > 0.6;
  }

  const metrics: TelemetryMetrics = {
    latency,
    jitter,
    packetLoss,
    throughput,
    anomalyDetected,
    status,
    timestamp: new Date().toISOString()
  };

  // Generate historical data points (last 6 queries)
  const history = Array.from({ length: 7 }).map((_, index) => {
    const timeVal = new Date(Date.now() - (7 - index) * 5000);
    const histFluctuation = (Math.sin(index + rand * 5) * 1.5);
    const histThruFluctuation = Math.floor(Math.cos(index + rand * 5) * 30);
    
    return {
      time: timeVal.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      latency: parseFloat(Math.max(1.2, baseLatency + histFluctuation).toFixed(3)),
      throughput: Math.max(10, baseThroughput + histThruFluctuation)
    };
  });

  // Include the current point in history
  history.push({
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
    latency,
    throughput
  });

  return NextResponse.json({
    region,
    metrics,
    history
  });
}
