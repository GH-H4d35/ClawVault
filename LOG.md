## 2026-03-10

- feat: add custom rule engine support and dashboard editor  
  - path: `src/claw_vault/guard/rules_store.py`  
    - Added YAML-backed rule definitions (`rules.yaml`) with `RuleCondition` and `RuleConfig` models and helpers to load/save/export rules.
  - path: `src/claw_vault/guard/rule_engine.py`  
    - Extended `RuleEngine` to load custom rules, evaluate them before the built-in guard matrix, and support conditions based on threat level, risk score, and detection pattern types.
  - path: `src/claw_vault/dashboard/api.py`  
    - Injected rule set into the live rule engine and exposed `/api/config/rules` (GET/POST) for listing and replacing custom rules.
  - path: `src/claw_vault/dashboard/static/index.html`  
    - Enhanced Config tab with a YAML-based “Rule Engine (Custom Rules)” editor to manage atomic rules from the UI, including a per-rule overview list with delete controls.
  - path: `tests/test_guard.py`  
    - Added unit tests to validate custom rule evaluation for injections, high-risk sensitive data, pattern type matching, and rule ordering.
  - path: `scripts/test.sh`  
    - Extended server/proxy tests to cover the new custom rule API and verify that a temporary “block all injections” rule takes effect end-to-end.

