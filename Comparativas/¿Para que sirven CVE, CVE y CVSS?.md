# ¿Para que sirven CVE, CVE y CVSS?
---
En el ecosistema de la seguridad de la información, la velocidad de respuesta es tan crítica como la precisión del diagnóstico. Para que los equipos de respuesta a incidentes (SOC) y los desarrolladores hablen el mismo idioma, la industria ha creado un sistema de estándares globales. Estos acrónimos *CVE, CWE y CVSS* no son solo etiquetas técnicas; son la base del Proceso de Calificación de Amenazas.

> # 1. CWE (Common Weakness Enumeration)
> Antes de que exista un ataque, existe un error. El CWE es una lista de tipos de debilidades de software y hardware. No se refiere a un programa específico, sino al "defecto de fábrica" conceptual.

***Su función: Educación y prevención.***

**Ejemplo: El CWE-79 (Cross-site Scripting) describe la debilidad general de no neutralizar adecuadamente las entradas de datos en una web, independientemente de si la web es de un banco o de una red social.**

> **2. CVE (Common Vulnerabilities and Exposures)
> Cuando una debilidad (CWE) se manifiesta en un software específico y se hace pública, se le asigna un CVE. Es el "nombre y apellido" de la brecha.**

***Su función: Identificación y rastreo único a nivel mundial.***

**El Registro: Es gestionado por la corporación MITRE y permite que si un analista en Japón habla del CVE-2021-44228, un administrador en España sepa exactamente que se refiere a la vulnerabilidad Log4Shell.**

> **3. CVSS (Common Vulnerability Scoring System)
> No todas las vulnerabilidades representan el mismo peligro. El CVSS proporciona una puntuación numérica (del 0.0 al 10.0) para determinar la severidad.**

Para calcularlo, se analizan tres métricas principales:

- Base: Características intrínsecas (¿Se puede atacar por internet? ¿Es complejo de ejecutar?).
- Temporal: El estado actual (¿Existe ya un parche oficial? ¿Hay un código de ataque público?).
- Ambiental: El contexto de tu empresa (¿Está ese servidor en una red aislada o expuesto al público?).

> 4. ¿Cómo interactúan en el Proceso de Calificación?
> Un artículo de seguridad completo no estaría completo sin entender la simbiosis entre estos elementos durante un análisis de amenazas:

- Detección: Tu escáner encuentra un fallo en un servidor y lo etiqueta como CVE-2023-XXXX.
- Análisis de Raíz: El equipo de desarrollo revisa el CWE asociado para entender qué error de código cometieron y cómo evitarlo en el futuro.
- Priorización: El equipo de seguridad observa el CVSS. Si la puntuación es 9.0+, se detienen otras tareas para aplicar el parche inmediatamente.
- Contextualización: Se utiliza el CAPEC (Common Attack Pattern Enumeration) para entender los pasos que daría un atacante para explotar ese CVE específico y así configurar las reglas del Firewall.

## **Conclusión**
La gestión moderna de vulnerabilidades no se trata de "arreglarlo todo", sino de arreglar lo que importa primero. El uso conjunto de CVE, CWE y CVSS permite a las organizaciones transformar un mar de alertas caóticas en un plan de acción priorizado y basado en datos.

---------------------------------
## **En Resumen:**

- CWE: Es la teoría (el error técnico). https://cwe.mitre.org/index.html
- CVE: Es la realidad (el fallo en un programa real). https://www.cve.org/
- CVSS: Es la prioridad (qué tan urgente es). https://cvss.js.org/
