export type GuardMode = "log" | "strict";

export interface PluginRuntimeConfig {
  clawvaultUrl: string;
  mode: GuardMode;
  extraPaths: string[];
  extraExtensions: string[];
  refreshIntervalSeconds: number;
  requestTimeoutMs: number;
}

export interface EffectiveRules {
  watchPaths: string[];
  watchPatterns: string[];
  extensions: string[];
}

export interface PathMatch {
  path: string;
  matchedRule: string;
}

export interface ExternalEvent {
  source: string;
  category: string;
  threat_level: "low" | "medium" | "high" | "critical";
  action: "log" | "block";
  tool_name: string;
  file_path: string;
  matched_rule: string;
  agent_id?: string;
  agent_name?: string;
  session_id?: string;
  message: string;
  risk_score: number;
}

export interface Logger {
  info(message: string): void;
  warn(message: string): void;
  error(message: string): void;
  debug(message: string): void;
}

export interface ToolCallEvent {
  toolName: string;
  params: Record<string, unknown>;
}

export interface AgentContext {
  agentId?: string;
  sessionKey?: string;
  sessionId?: string;
  [key: string]: unknown;
}

export interface OpenClawPluginApi {
  logger: Logger;
  config: Record<string, unknown>;
  pluginConfig?: Record<string, unknown>;
  version: string;
  on(
    event: string,
    handler: (
      event: unknown,
      ctx: AgentContext,
    ) =>
      | Promise<void | { block: boolean; blockReason: string }>
      | void
      | { block: boolean; blockReason: string },
  ): void;
}
