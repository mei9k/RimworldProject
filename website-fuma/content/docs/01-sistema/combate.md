---
title: "combate"
---

﻿# Combate

Sistema de combate táctico pensado para escaramuzas rápidas, decisiones de riesgo y resolución clara en mesa.

## Navegación rápida

- [Resumen de combate](#resumen-de-combate)
- [Valores clave](#valores-clave)
- [Estados de salud](#estados-de-salud)
- [Economía de acciones e iniciativa](#economía-de-acciones-e-iniciativa)
- [Movimiento](#movimiento)
- [Combate cuerpo a cuerpo (CaC)](#combate-cuerpo-a-cuerpo-cac)
- [Combate a distancia (CaD)](#combate-a-distancia-cad)
- [Reglas tácticas en CaD](#reglas-tácticas-en-cad)
- [Fuego de cobertura y supresión](#fuego-de-cobertura-y-supresión)
- [Granadas y explosivos arrojables](#granadas-y-explosivos-arrojables)
- [Curación en combate](#curación-en-combate)
- [Documentos relacionados](#documentos-relacionados)

---

## Resumen de combate

- Un turno dura **3 segundos**.
- Cada personaje tiene 1 accion mayor, 1 accion menor y acciones adicionales en función de su iniciativa.
- la iniciativa se lanza al principio del combate y se mantiene todo el encuentro.
- El daño impacta sobre PV y puede llevar a estados críticos rápidamente.
- El daño se ejerce con ataques cuerpo a cuerpo, a distancia o con otros elementos (efectos, areas, etc...)

## Valores clave

- **Puntos de vida (PV)**: FIS x 3. (FIS x 4 para menor letalidad)
- **Defensa**: DEX + Esquivar + 5.
- **Iniciativa**: PER + Reflejos + dado objetivo - Estorbo.

La letalidad quedó fijada en **PV = FIS x 3** para dar peso a la absorción de armaduras.

## Estados de salud

Cuando recibes daño, lo restas de tus PV actuales.

- **Malherido**: PV menor o igual a FIS. -> desventaja a dado objetivo
- **Inconsciencia**: PV menor o igual a 0.
- **Muerte**: PV menor o igual a -FIS x 2.

---

## Economía de acciones e iniciativa

La iniciativa define el orden de turnos y cuántas **acciones mayores extra** obtiene cada personaje.


### Regla de acciones por turno

Todo turno contiene siempre:

- **1 acción mayor** : atacar, usar equipo complejo, maniobra técnica.
- **1 acción menor** : recargar, consumir un objeto simple, transferir equipo, manipulación rápida.

Acciones mayores adicionales por iniciativa:

- Si la iniciativa es **20 o más**, ganas **+1 acción mayor**.
- Si la iniciativa es **30 o más**, ganas **otra +1 acción mayor**.
- Si la iniciativa es **40 o más**, ganas **otra +1 acción mayor**.
- Y así sucesivamente, por cada tramo de 10 por encima de 20.

Ejemplo:

- Iniciativa 18: 1 mayor + 1 menor.
- Iniciativa 24: 2 mayores + 1 menor.
- Iniciativa 33: 3 mayores + 1 menor.

## Movimiento

- **Acción mayor**: 6 m 
- **Acción menor**: 3 m
- **Movimiento máximo por turno**: 9 m, independientemente del total de acciones.

Si se juega narrativo, usa estas distancias como referencia proporcional.

---

## Combate cuerpo a cuerpo (CaC)

resolución:

1. El atacante declara objetivo y acción.
2. Tira usando **Armas cuerpo a cuerpo (FIS)**.
3. Compara contra la **Defensa** del objetivo.
4. Si iguala o supera la defensa, impacta y tira el daño del arma.

## Combate a distancia (CaD)

Flujo de resolución:

1. El atacante declara objetivo, tipo de disparo y posición.
2. Tira usando **Armas a distancia (DEX)**.
3. Compara contra una **dificultad de disparo** (no contra defensa directa), modificada por entorno.
4. Si iguala o supera, impacta y tira daño.

Tabla base de dificultad por distancia:

- Bocajarro: 10
- Corta: 15
- Media: 20
- Larga: 25

Elementos propios de armas a distancia:

- **Precisión** del arma: bonificador a la tirada.
- **Distancia óptima**: referencia para dificultad según rango.
- **Cargador simplificado**: mide descargas/ráfagas, no bala a bala.
- **Fuego automático**: gasta más rápido el cargador y puede dar bonificación de precisión según arma/regla aplicada.

> Nota para DJ: las reglas de creación, balance y uptier de armas se documentan en [Diseño y balance de armas](diseno-y-balance-de-armas.md).

---

## Reglas tácticas en CaD

### Cobertura y movimiento

La cobertura aumenta la dificultad de impactar:

- Cuerpo a tierra, objetos pequeños, barricadas o columnas añaden entre **+2 y +5**.
- Cobertura total (sin posibilidad de hacer nada)
 **+10**.

Objetivo en movimiento:

- Si el objetivo dedica toda su acción a moverse, se aplica **+2** a la dificultad para impactarle.


### Flanqueo

Por cada atacante adicional que dispare al mismo objetivo desde un ángulo distinto:

- **+1 acumulativo** a impactar.

## Fuego de cobertura y supresión

Las armas automáticas pueden disparar sobre un área en vez de un blanco concreto.

En ese caso, el objetivo debe superar una tirada defensiva:

- **Fuego de cobertura simple**: dificultad 15 (DEX + Esquivar).
- **Fuego automático/supresión intensa**: dificultad 20 (DEX + Esquivar).

## Granadas y explosivos arrojables

Las granadas y explosivos arrojables se tratan como ataques de área.

- La dificultad de colocación/impacto y el radio final dependen del tipo de granada.
- El daño y efectos secundarios (fragmentación, humo, aturdimiento, etc.) deben venir definidos por el objeto.

---

## Curación en combate

Resumen operativo. Para detalle completo, ver [Daño y curación](danio-y-curacion.md).

- **Curación natural**: 1 PV por descanso largo (2 PV en buenas condiciones).
- **Medicina**: 1d6 PV con dificultad 15, una vez al día por personaje.
- **Consumibles**: objetos de un solo uso que restauran PV o mejoran la recuperación.

## Coger aire
Tras un combate, los personajes descansan y se 
recuperan del estrés y la fatiga de éste, curándose 1d6 
o 2d6 PV según sea realista o épica la partida


## Documentos relacionados

- [Tiradas y críticos](tiradas-y-criticos.md)
- [Daño y curación](danio-y-curacion.md)
- [Equipo e inventario](equipo-e-inventario.md)

