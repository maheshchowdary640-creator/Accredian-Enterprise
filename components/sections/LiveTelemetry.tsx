"use client";

import React, { useState, useEffect } from "react";
import { TelemetryData } from "../../types";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Activity, InfoIcon } from "../icons";

export const LiveTelemetry: React.FC = () => {
  const [region, setRegion] = useState("us-east");
  const [data, setData] = useState<TelemetryData | null>(null);
  const [loading, setLoading] = useState(true);
  const [simulationActive, setSimulationActive] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch telemetry from local API
  const fetchTelemetry = async (activeRegion: string, forceSpike = false) => {
    try {
      setError(null);
      const res = await fetch(`/api/performance-stats?region=${activeRegion}`);
      if (!res.ok) throw new Error("Failed to fetch stats");
      const json: TelemetryData = await res.json();

      if (forceSpike) {
        // Manipulate payload to simulate a severe latency/jitter spike
        json.metrics.latency = parseFloat((json.metrics.latency * 4.5).toFixed(3));
        json.metrics.jitter = parseFloat((json.metrics.jitter * 5.0).toFixed(3));
        json.metrics.packetLoss = parseFloat((json.metrics.packetLoss * 15.0).toFixed(5));
        json.metrics.throughput = Math.floor(json.metrics.throughput * 0.4);
        json.metrics.status = "critical";
        json.metrics.anomalyDetected = true;
      }

      setData(json);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError("Unable to connect to telemetry API.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTelemetry(region, simulationActive);

    // Poll telemetry data every 4 seconds to animate graphs
    const interval = setInterval(() => {
      fetchTelemetry(region, simulationActive);
    }, 4000);

    return () => clearInterval(interval);
  }, [region, simulationActive]);

  const handleSimulateLoad = () => {
    setSimulationActive(true);
    fetchTelemetry(region, true);
    
    // Auto reset simulation after 10 seconds
    setTimeout(() => {
      setSimulationActive(false);
    }, 10000);
  };

  // Helper to draw clean SVG polyline based on historical latency points
  const generateSvgPath = (points: { latency: number }[]) => {
    if (!points || points.length === 0) return "";
    const width = 500;
    const height = 120;
    const maxVal = Math.max(...points.map((p) => p.latency), 60);
    const minVal = Math.min(...points.map((p) => p.latency), 0);
    const valRange = maxVal - minVal || 1;

    const coords = points.map((p, idx) => {
      const x = (idx / (points.length - 1)) * width;
      const y = height - ((p.latency - minVal) / valRange) * (height - 20) - 10;
      return `${x},${y}`;
    });

    return coords.join(" ");
  };

  return (
    <section id="livetelemetry" className="py-24 relative overflow-hidden bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <Badge variant="cyan" size="md" className="mb-4">
              LIVE SYSTEM STATE
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Real-Time Platform Performance Monitor
            </h2>
            <p className="text-sm md:text-base text-slate-400 mt-2 leading-relaxed">
              Experience NetPrism's microsecond-precision analytics in action. Below is a live telemetry feed directly querying our mock edge sensors.
            </p>
          </div>

          {/* Region Selector buttons */}
          <div className="flex bg-slate-900 border border-slate-800 rounded-lg p-1 gap-1 self-start md:self-auto">
            {[
              { id: "us-east", label: "US East (N. Virginia)" },
              { id: "eu-west", label: "EU West (Ireland)" },
              { id: "ap-south", label: "AP South (Mumbai)" },
              { id: "sa-east", label: "SA East (São Paulo)" }
            ].map((reg) => (
              <button
                key={reg.id}
                onClick={() => { setRegion(reg.id); setSimulationActive(false); }}
                className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors cursor-pointer ${
                  region === reg.id
                    ? "bg-slate-800 text-accent-cyan"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {reg.label.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {error && (
          <div className="glass-panel p-6 border-red-500/30 rounded-xl text-center mb-8">
            <p className="text-sm font-semibold text-red-400">{error}</p>
          </div>
        )}

        {/* Telemetry Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Latency card */}
          <Card hoverEffect={false} className="bg-slate-900/30 border-white/5">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                Round-Trip Latency
              </span>
              <span className="text-3xl font-extrabold font-mono text-white mt-2 flex items-baseline gap-1">
                {loading ? "..." : data?.metrics.latency}
                <span className="text-sm font-semibold text-slate-400">ms</span>
              </span>
              <div className="flex items-center gap-1.5 mt-3">
                <div className={`w-2 h-2 rounded-full ${
                  data?.metrics.status === "optimal"
                    ? "bg-emerald-500"
                    : data?.metrics.status === "warning"
                    ? "bg-amber-500"
                    : "bg-red-500 animate-ping"
                }`} />
                <span className={`text-[10px] font-bold uppercase tracking-wider ${
                  data?.metrics.status === "optimal"
                    ? "text-emerald-400"
                    : data?.metrics.status === "warning"
                    ? "text-amber-400"
                    : "text-red-400 font-extrabold"
                }`}>
                  {loading ? "PENDING" : data?.metrics.status}
                </span>
              </div>
            </div>
          </Card>

          {/* Jitter card */}
          <Card hoverEffect={false} className="bg-slate-900/30 border-white/5">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                Transit Jitter
              </span>
              <span className="text-3xl font-extrabold font-mono text-white mt-2 flex items-baseline gap-1">
                {loading ? "..." : data?.metrics.jitter}
                <span className="text-sm font-semibold text-slate-400">ms</span>
              </span>
              <span className="text-[10px] text-slate-500 mt-3 font-mono">
                IEEE 1588 time sync active
              </span>
            </div>
          </Card>

          {/* Packet Loss card */}
          <Card hoverEffect={false} className="bg-slate-900/30 border-white/5">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                Packet Loss Rate
              </span>
              <span className="text-3xl font-extrabold font-mono text-white mt-2 flex items-baseline gap-1">
                {loading ? "..." : data?.metrics.packetLoss}
                <span className="text-sm font-semibold text-slate-400">%</span>
              </span>
              <span className="text-[10px] text-slate-500 mt-3">
                Analyzed at 100Gbps line-rate
              </span>
            </div>
          </Card>

          {/* Throughput card */}
          <Card hoverEffect={false} className="bg-slate-900/30 border-white/5">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                Interface Throughput
              </span>
              <span className="text-3xl font-extrabold font-mono text-white mt-2 flex items-baseline gap-1">
                {loading ? "..." : data?.metrics.throughput}
                <span className="text-sm font-semibold text-slate-400">Mbps</span>
              </span>
              <span className="text-[10px] text-slate-500 mt-3">
                Aggregate capacity
              </span>
            </div>
          </Card>
        </div>

        {/* Live SVG Graph and Simulation Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Graph panel */}
          <div className="lg:col-span-8 glass-panel p-6 border border-white/5 rounded-xl flex flex-col justify-between min-h-[250px]">
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <Activity className="text-accent-cyan w-4 h-4 animate-pulse" />
                <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                  Latency Waveform Analyzer
                </h4>
              </div>
              <Badge variant="zinc" size="sm">
                4s refresh
              </Badge>
            </div>

            {/* SVG Visual graph */}
            <div className="flex-1 min-h-[120px] flex items-center justify-center relative bg-slate-950/40 rounded border border-white/5 overflow-hidden">
              {!loading && data && data.history ? (
                <svg viewBox="0 0 500 120" className="w-full h-full preserve-3d" preserveAspectRatio="none">
                  {/* Grid Lines */}
                  <line x1="0" y1="20" x2="500" y2="20" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                  <line x1="0" y1="60" x2="500" y2="60" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                  <line x1="0" y1="100" x2="500" y2="100" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />

                  {/* Gradient Area under path */}
                  <defs>
                    <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={simulationActive ? "#7f00ff" : "#00f2fe"} stopOpacity="0.25" />
                      <stop offset="100%" stopColor="transparent" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  <path
                    d={`M0,120 L${generateSvgPath(data.history)} L500,120 Z`}
                    fill="url(#chartGlow)"
                  />

                  {/* Line path */}
                  <polyline
                    fill="none"
                    stroke={simulationActive ? "#7f00ff" : "#00f2fe"}
                    strokeWidth="2"
                    points={generateSvgPath(data.history)}
                    className="transition-all duration-500"
                  />
                </svg>
              ) : (
                <span className="text-xs text-slate-500 animate-pulse font-mono">
                  Loading Waveform Stream...
                </span>
              )}
            </div>

            {/* Time points label */}
            <div className="flex justify-between mt-2 font-mono text-[9px] text-slate-500">
              <span>{data?.history[0]?.time || "00:00:00"}</span>
              <span>{data?.history[3]?.time || "00:00:00"}</span>
              <span>{data?.history[data?.history.length - 1]?.time || "00:00:00"}</span>
            </div>
          </div>

          {/* Simulation Control panel */}
          <div className="lg:col-span-4 bg-slate-900/50 border border-white/5 rounded-xl p-6 flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-1.5 text-slate-400">
                <InfoIcon size={16} className="text-accent-cyan" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Observability Sandbox
                </span>
              </div>
              <h4 className="text-base font-bold text-white">
                Test AI-Driven Anomaly Alerter
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Click below to simulate network queue congestion. The platform will flag simulated packet jitter/loss and flag an anomaly within 2-4 seconds.
              </p>
            </div>

            <div className="space-y-4 pt-6">
              <div className="flex items-center justify-between border-t border-white/5 pt-4">
                <span className="text-xs text-slate-500">Anomaly Alerter:</span>
                <span className={`text-xs font-mono font-bold ${
                  data?.metrics.anomalyDetected
                    ? "text-red-400 animate-pulse"
                    : "text-emerald-400"
                }`}>
                  {data?.metrics.anomalyDetected ? "⚠️ ANOMALY DETECTED" : "✓ OPERATIONAL"}
                </span>
              </div>

              <Button
                variant={simulationActive ? "purple" : "cyan"}
                className="w-full text-center"
                onClick={handleSimulateLoad}
                disabled={simulationActive}
              >
                {simulationActive ? "Spike Simulation Active (10s)" : "Simulate Network Spike"}
              </Button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default LiveTelemetry;
