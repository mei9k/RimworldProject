---
title: "danio y curacion"
---

﻿# Daño y curación

Este módulo define cómo se pierde salud, cómo empeora el estado del personaje y qué opciones existen para recuperarse o estabilizarse.

## Navegación rápida

- [Valores base de salud](#valores-base-de-salud)
- [Estados de salud](#estados-de-salud)
- [Modificadores de estado](#modificadores-de-estado)
- [Daño crítico y heridas graves](#daño-crítico-y-heridas-graves)
- [Tabla de localización (1d10)](#tabla-de-localización-1d10)
- [Tabla de gravedad (2d6)](#tabla-de-gravedad-2d6)
- [Efectos de heridas y tratamiento](#efectos-de-heridas-y-tratamiento)
- [Prótesis y reconstrucción](#prótesis-y-reconstrucción)
- [Curación natural y medicina](#curación-natural-y-medicina)
- [Consumibles de salud](#consumibles-de-salud)
- [Drogas y efectos secundarios](#drogas-y-efectos-secundarios)
- [Glosario de efectos y estados](glosario/efectos-y-estados.md)
- [Enlaces de sistema](#enlaces-de-sistema)

---

## Valores base de salud

- **PV base**: FIS x 3.

Escalas opcionales de letalidad:

- Baja letalidad: FIS x 4.
- Letalidad estándar: FIS x 3 (actual recomendada).
- Alta letalidad: FIS x 2.

Cuando un personaje recibe daño, lo resta de sus PV actuales.

## Estados de salud

- **Malherido**: PV menor o igual a FIS.
- **Inconsciencia**: PV menor o igual a 0.
- **Muerte**: PV menor o igual a -FIS x 2.

---

## Modificadores de estado

Se aplican por falta de alimento o descanso adecuado durante periodos prolongados (por ejemplo, más de 3 días en malas condiciones).

| Estado | Efecto | Duración |
| --- | --- | --- |
| Hambriento | -1 / -2 / -3 a tiradas | Hasta comer |
| Malnutrido | Dado bajo | Hasta comer, luego pasa a Hambriento 1 |
| Cansado | -1 / -2 / -3 a tiradas | Hasta descansar 8 h |
| Exhausto | Dado bajo | Hasta descansar 8 h, luego pasa a Cansado 1 |

Regla acumulativa:

- **Hambriento** y **Cansado** se acumulan entre sí, pudiendo alcanzar hasta -6 total.

---

## Daño crítico y heridas graves

Cuando un impacto supera un umbral de daño, puede causar una herida grave además de la pérdida de PV.

Umbral recomendado actual:

- **Daño recibido mayor o igual a FIS x 3 / 2** (mitad de los PV base en el modelo FIS x 3).

Notas de balance (abiertas):

- Umbral más duro: FIS x 2.
- Umbral más frecuente: FIS.
- Umbral intermedio recomendado: FIS x 3 / 2.

Proceso de resolución de herida grave:

1. Tirar **1d10** para localización.
2. Tirar **2d6** para gravedad/efecto.
3. Aplicar efecto y tratamiento correspondiente.

## Tabla de localización (1d10)

| Tirada | Zona |
| --- | --- |
| 1 | Cabeza |
| 2-6 | Torso |
| 7 | Brazo izquierdo |
| 8 | Brazo derecho |
| 9 | Pierna izquierda |
| 10 | Pierna derecha |

## Tabla de gravedad (2d6)

| Tirada | Resultado |
| --- | --- |
| 2 | Inutilizado |
| 3 | Fractura |
| 4-5 | Contusión |
| 6-8 | Dolor |
| 9-10 | Sangrado |
| 11 | Laceración |
| 12 | Pérdida |

## Efectos de heridas y tratamiento

| Efecto | Regla | Duración | Tratamiento |
| --- | --- | --- | --- |
| Dolor | -1 a tiradas | 1d6 turnos | Analgésico |
| Sangrado | -1 PV por turno | 1d6 turnos | Vendas o hemostático |
| Contusión | Dado bajo | 1d6 turnos | Analgésico |
| Laceración | -1d6 PV por turno | Hasta tratar | Hemostático (temporal) o vendas + Medicina (Dif 20) |
| Fractura | Dado bajo | Hasta tratar | Férula / entablillado |
| Inutilizado | Dado bajo | Hasta recuperación | Tratamiento diario Medicina Dif 15 hasta sumatorio acumulado 50 |
| Pérdida | Destrucción del miembro + dado bajo + laceración | Permanente (salvo prótesis/implantes) | Cirugía, prótesis o solución de campaña |

---

## Prótesis y reconstrucción

Cuando una herida implica pérdida o inutilización permanente, el personaje puede recurrir a sustitución protésica o mejora cibernética.

Niveles tecnológicos:

- **Básica**: sustituto funcional mínimo, con penalizadores claros frente a un miembro natural.
- **Protésico**: rendimiento equivalente a un miembro natural en uso estándar (nivel neutro).
- **Biónico**: rendimiento superior al natural en tareas concretas, normalmente con coste energético.
- **Archeotech**: tecnología excepcional de alto nivel, muy superior y difícil de conseguir.

Las prótesis pueden ser:

- **Sustitutivas**: reemplazan una parte perdida o destruida.
- **De mejora**: se implantan sobre un miembro funcional para ampliar capacidades.

El atributo **Cibertech** se usa para instalación, mantenimiento, diagnóstico y modificación de implantes.

Ejemplos de módulos integrables:

- Inyectores médicos.
- Compartimentos ocultos.
- Armas integradas.
- Sensores o herramientas técnicas.

Para reglas detalladas de energía, mantenimiento y equilibrio por nivel, ver [Prótesis y ciberimplantes](protesis-y-ciberimplantes.md).

---

## Curación natural y medicina

- **Curación natural**: 1 PV por descanso largo, 2 PV en buenas condiciones.
- **Habilidad Medicina**: 1d6 PV con tirada de dificultad 15, una vez al día por personaje.

Fuera de combate, la recuperación suele ser más estable y segura. En combate, prioriza estabilización y control de estado.

## Consumibles de salud

Compendio completo y plantillas en [Material Sanitario](../Compendios/material-sanitario.mdx).

### 8.1 Botiquín

Restaura PV en uso y no tiene efectos negativos por defecto.

Atributos sugeridos del botiquín:

- Nombre
- Descripción
- Cantidad de usos
- Curación
- Dificultad de aplicación

Reglas:

- Consumir un uso por aplicación.
- Fuera de combate, la tirada suele considerarse éxito (salvo pifia, a discreción del DJ).
- Crítico de aplicación: por cada +10 sobre la dificultad, añade 1d6 de curación.

### 8.2 Inyectores

Medicación de acción inmediata.

- Regeneran PV según modelo.
- En combate suelen costar **1 acción menor**.
- No requieren dificultad de aplicación.
- Pueden incorporar efectos secundarios.

Ejemplos de secundarios:

- Cansancio tras efecto.
- Desorientación.
- Dependencia psicológica en uso repetido.

### 8.3 Tratamiento de heridas

Permiten eliminar o contener efectos de heridas.

| Efecto | Solución habitual |
| --- | --- |
| Dolor | Analgésico |
| Sangrado | Vendajes / agente hemostático |
| Laceración | Torniquete / agente hemostático |
| Contusión | Analgésico |
| Fractura | Entablillado / férula |

---

## Drogas y efectos secundarios

Compendio completo y plantillas en [Compendio de drogas](compendio-drogas.md).

Algunos consumibles se consideran drogas: conceden uno o varios efectos (habitualmente positivos) y pueden tener inconvenientes o riesgos.

Tipos de droga:

- **Sociales**: uso cotidiano con riesgo bajo en dosis normales.
- **Médicas**: requieren dosificación correcta y control de frecuencia.
- **Duras**: siempre peligrosas; cada consumo implica tirada de efectos secundarios.

Plantilla de diseño de droga:

- Nombre
- Descripción (color, olor, textura, presentación)
- Tipo (social, médica, dura)
- Efectos principales
- Efectos secundarios
- Dificultad de efectos secundarios

Regla de uso:

1. Aplicas efectos principales.
2. Realizas tirada contra la dificultad de efectos secundarios.
3. Si fallas, aplicas secundarios.

---



## Enlaces de sistema

- [Combate](combate.md)
- [Tiradas y críticos](tiradas-y-criticos.md)
- [Equipo e inventario](equipo-e-inventario.md)
- [Prótesis y ciberimplantes](protesis-y-ciberimplantes.md)
- [Material Sanitario](../Compendios/material-sanitario.mdx)
- [Compendio de drogas](compendio-drogas.md)
- [Glosario de efectos y estados](glosario/efectos-y-estados.md)

