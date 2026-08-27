import re

with open('./docs/ai-practitioner/section-4-prompt-engineering/prompt-performance-optimization-hands-on.mdx', 'r') as f:
    content = f.read()

r = '''```mermaid
flowchart TD
    A["[ Input Prompt: 'Write a short story about a robot cooking' ]"] --> B
    subgraph Inference Sampling Spectrum
        direction LR
        B["Conservative / Deterministic Setup<br>(Low Temp + Low Top-P + Low Top-K)"]
        C["Creative / High-Variance Setup<br>(High Temp + High Top-P + High Top-K)"]
    end
    B --> D["* Temperature: ~0.0 - 0.2<br>* Top-P: ~0.2<br>* Top-K: ~10<br>* Output: Predictable, standard, and conservative narrative"]
    C --> E["* Temperature: ~0.8 - 1.0<br>* Top-P: ~0.99<br>* Top-K: ~500<br>* Output: Rich vocabulary, diverse metaphors, and novel thematic angles"]
```'''

p = r"```\n\[ Input Prompt: \"Write a short story about a robot cooking\" \]\n                               \|\n                               v\n\+---------------------------------------------------------------------------------------\+\n\| INFERENCE SAMPLING SPECTRUM                                                           \|\n\+------------------------------------\+--------------------------------------------------\+\n\| Conservative \/ Deterministic Setup \| Creative \/ High-Variance Setup                   \|\n\| \(Low Temp \+ Low Top-P \+ Low Top-K\) \| \(High Temp \+ High Top-P \+ High Top-K\)            \|\n\+------------------------------------\+--------------------------------------------------\+\n\| \* Temperature: ~0\.0 - 0\.2          \| \* Temperature: ~0\.8 - 1\.0                        \|\n\| \* Top-P: ~0\.2                      \| \* Top-P: ~0\.99                                   \|\n\| \* Top-K: ~10                       \| \* Top-K: ~500                                    \|\n\| \* Output: Predictable, standard,   \| \* Output: Rich vocabulary, diverse metaphors,    \|\n\|   and conservative narrative       \|   and novel thematic angles                      \|\n\+------------------------------------\+--------------------------------------------------\+\n```"

content = re.sub(p, r, content)

with open('./docs/ai-practitioner/section-4-prompt-engineering/prompt-performance-optimization-hands-on.mdx', 'w') as f:
    f.write(content)
