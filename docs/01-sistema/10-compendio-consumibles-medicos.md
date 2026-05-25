import GlossaryTerm from '@site/src/components/GlossaryTerm';

# Compendio de consumibles médicos

Catálogo de referencia para consumibles sanitarios en campaña.

## Navegación rápida

- [Introducción rápida](#introducción-rápida)
- [Cómo se usan en partida](#cómo-se-usan-en-partida)
- [Botiquines](#botiquines)
- [Herramientas de trauma](#herramientas-de-trauma)
- [Inyectores](#inyectores)
- [Plantilla de consumible](#plantilla-de-consumible)
- [Reglas de uso en combate y fuera de combate](#reglas-de-uso-en-combate-y-fuera-de-combate)

Glosario de referencia: [Glosario de efectos y estados](glosario/efectos-y-estados.md).

---

## Introducción rápida

En este sistema hay tres familias principales de consumibles médicos:

- **Botiquines**: restauran PV mediante aplicación con material médico.
- **Herramientas de trauma**: controlan estados concretos (<GlossaryTerm to="/01-sistema/glosario/efectos-y-estados#sangrado" term="Sangrado" tooltip="Estado de hemorragia activa que empeora si no se trata." />, <GlossaryTerm to="/01-sistema/glosario/efectos-y-estados#fractura" term="Fractura" tooltip="Lesion o rotura osea que impone penalizadores hasta estabilizacion." />, <GlossaryTerm to="/01-sistema/glosario/efectos-y-estados#laceracion" term="Laceracion" tooltip="Herida profunda que puede seguir causando dano por turno." />).
- **Inyectores**: efectos inmediatos, rápidos de aplicar, con posible coste secundario.

## Cómo se usan en partida

Cada consumible debe indicar claramente:

- qué cura o estabiliza
- cuánto tarda en hacer efecto
- coste de acción en combate
- dificultad de aplicación (si aplica)
- efectos secundarios o limitaciones

---

## Botiquines

Uso típico:

- Curan PV por uso.
- Requieren aplicación médica (con o sin tirada, según situación).
- Escalan por calidad: más usos, más curación, menor dificultad.

### Ejemplos iniciales

| Nombre | Calidad | Usos | Curación | Dificultad | Acción | Nota |
| --- | --- | --- | --- | --- | --- | --- |
| Medkit civil C-12 | Básica | 3 | 1d6 PV | 15 | Mayor | Barato, común en estaciones |
| Medkit táctico M-4 | Media | 4 | 2d6 PV | 14 | Mayor | Diseñado para combate de escuadra |
| Medkit quirúrgico Aegis | Alta | 2 | 3d6 PV | 13 | Mayor | Coste alto, uso profesional |

---

## Herramientas de trauma

Uso típico:

- No siempre curan PV directo.
- Su función principal es detener deterioro o quitar penalizadores.
- Son clave para estabilizar hasta poder dar tratamiento completo.

### Ejemplos iniciales

| Nombre | Tipo | Efecto principal | Duración | Acción | Nota |
| --- | --- | --- | --- | --- | --- |
| Vendaje hemostático H-3 | <GlossaryTerm to="/01-sistema/glosario/efectos-y-estados#sangrado" term="Sangrado" tooltip="Estado de hemorragia activa que empeora si no se trata." /> | Detiene <GlossaryTerm to="/01-sistema/glosario/efectos-y-estados#sangrado" term="Sangrado" tooltip="Estado de hemorragia activa que empeora si no se trata." /> | 1d6 turnos | Menor | Solución rápida de campaña |
| Férula modular Kestrel | <GlossaryTerm to="/01-sistema/glosario/efectos-y-estados#fractura" term="Fractura" tooltip="Lesion o rotura osea que impone penalizadores hasta estabilizacion." /> | Suprime penalizador de <GlossaryTerm to="/01-sistema/glosario/efectos-y-estados#fractura" term="Fractura" tooltip="Lesion o rotura osea que impone penalizadores hasta estabilizacion." /> | Hasta retiro | Mayor | Requiere ajuste inicial |
| Torniquete de presión V-lock | <GlossaryTerm to="/01-sistema/glosario/efectos-y-estados#laceracion" term="Laceracion" tooltip="Herida profunda que puede seguir causando dano por turno." /> | Reduce daño de <GlossaryTerm to="/01-sistema/glosario/efectos-y-estados#laceracion" term="Laceracion" tooltip="Herida profunda que puede seguir causando dano por turno." /> a la mitad | 1d6 turnos | Menor | Puede causar <GlossaryTerm to="/01-sistema/glosario/efectos-y-estados#dolor" term="Dolor" tooltip="Penalizacion temporal por trauma o tratamiento invasivo." /> adicional |

---

## Inyectores

Uso típico:

- Aplicación rápida, generalmente en acción menor.
- Curación o mejora inmediata de rendimiento.
- Riesgo de secundarios en modelos potentes o repetidos.

### Ejemplos iniciales

| Nombre | Efecto principal | Secundario posible | Acción | Riesgo |
| --- | --- | --- | --- | --- |
| RegenShot Mk-I | +1d6 PV inmediato | <GlossaryTerm to="/01-sistema/glosario/efectos-y-estados#cansado" term="Cansado" tooltip="Penalizador creciente por agotamiento acumulado." /> leve tras 1d6 turnos | Menor | Bajo |
| NeuroStim P-9 | Ignora <GlossaryTerm to="/01-sistema/glosario/efectos-y-estados#dolor" term="Dolor" tooltip="Penalizacion temporal por trauma o tratamiento invasivo." /> durante 1d6 turnos | <GlossaryTerm to="/01-sistema/glosario/efectos-y-estados#desorientacion" term="Desorientacion" tooltip="Desfase sensorial y mental al terminar el efecto estimulante." /> al terminar | Menor | Medio |
| Combat Surge VX | +2 a reflejos durante 1d6 turnos | <GlossaryTerm to="/01-sistema/glosario/efectos-y-estados#fatiga" term="Fatiga" tooltip="Caida brusca del rendimiento tras sobreesfuerzo quimico." /> fuerte y <GlossaryTerm to="/01-sistema/glosario/efectos-y-estados#temblor" term="Temblor" tooltip="Inestabilidad motora que empeora acciones de precision." /> posterior | Menor | Alto |

---

## Plantilla de consumible

Campos recomendados para nuevos objetos:

- Nombre
- Tipo (botiquín, herramienta de trauma, inyector)
- Descripción breve
- Usos
- Efecto principal
- Dificultad de aplicación (si aplica)
- Coste de acción (mayor/menor)
- Efectos secundarios (si aplica)

## Reglas de uso en combate y fuera de combate

- En combate, respeta coste de acción y dificultad de aplicación.
- Fuera de combate, el DJ puede simplificar tiradas para acelerar ritmo.
- Pifias y críticos pueden alterar resultado (especialmente botiquines).

Ver también: [Daño y curación](06-danio-y-curacion.md), [Compendio de drogas](11-compendio-drogas.md), [Glosario de efectos y estados](glosario/efectos-y-estados.md).

