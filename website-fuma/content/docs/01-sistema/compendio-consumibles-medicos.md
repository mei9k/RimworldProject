---
title: "Compendio de consumibles médicos"
---

﻿import GlossaryTerm from '@/components/GlossaryTerm';

# Compendio de consumibles médicos

Catálogo de referencia para consumibles sanitarios en campaña.

<div className="not-prose mb-8 overflow-hidden rounded-3xl border border-fd-primary/20 bg-gradient-to-br from-fd-card via-fd-card to-fd-primary/5">
	<div className="grid gap-6 p-6 md:grid-cols-[1.5fr_1fr] md:p-8">
		<div>
			<p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-fd-muted-foreground">
				Campo medico | Combate | Estabilizacion
			</p>
			<h2 className="mb-3 text-3xl font-semibold tracking-tight text-fd-foreground md:text-4xl">
				Herramientas para mantener a un equipo vivo cuando todo va mal
			</h2>
			<p className="max-w-2xl text-sm leading-6 text-fd-muted-foreground md:text-[15px]">
				Este compendio separa lo que cura, lo que estabiliza y lo que fuerza rendimiento a corto plazo.
				La idea no es solo listar objetos: es dejar claro qué papel táctico cumple cada consumible en mesa.
			</p>
		</div>
		<div className="grid gap-3 self-start">
			<div className="rounded-2xl border border-fd-border/80 bg-fd-background/80 p-4">
				<p className="text-xs uppercase tracking-[0.2em] text-fd-muted-foreground">Botiquines</p>
				<p className="mt-1 text-sm text-fd-foreground">Recuperacion de PV y soporte medico base.</p>
			</div>
			<div className="rounded-2xl border border-fd-border/80 bg-fd-background/80 p-4">
				<p className="text-xs uppercase tracking-[0.2em] text-fd-muted-foreground">Trauma</p>
				<p className="mt-1 text-sm text-fd-foreground">Control de deterioro, penalizadores y heridas activas.</p>
			</div>
			<div className="rounded-2xl border border-fd-border/80 bg-fd-background/80 p-4">
				<p className="text-xs uppercase tracking-[0.2em] text-fd-muted-foreground">Inyectores</p>
				<p className="mt-1 text-sm text-fd-foreground">Impacto inmediato con coste fisiologico posterior.</p>
			</div>
		</div>
	</div>
</div>

## Navegación rápida

- [Introducción rápida](#introducción-rápida)
- [Cómo se usan en partida](#cómo-se-usan-en-partida)
- [Botiquines](#botiquines)
- [Herramientas de trauma](#herramientas-de-trauma)
- [Inyectores](#inyectores)
- [Plantilla de consumible](#plantilla-de-consumible)
- [Reglas de uso en combate y fuera de combate](#reglas-de-uso-en-combate-y-fuera-de-combate)

Glosario de referencia: [Glosario de efectos y estados](glosario/efectos-y-estados.md).

<div className="not-prose mb-10 grid gap-4 md:grid-cols-3">
	<div className="rounded-2xl border border-fd-border bg-fd-card p-5">
		<p className="text-xs uppercase tracking-[0.22em] text-fd-muted-foreground">Lectura rapida</p>
		<p className="mt-2 text-lg font-medium">Que repara</p>
		<p className="mt-2 text-sm leading-6 text-fd-muted-foreground">
			Botiquines e inyectores recuperan capacidad inmediata. Las herramientas de trauma no siempre devuelven PV, pero evitan que la situacion empeore.
		</p>
	</div>
	<div className="rounded-2xl border border-fd-border bg-fd-card p-5">
		<p className="text-xs uppercase tracking-[0.22em] text-fd-muted-foreground">Ritmo de uso</p>
		<p className="mt-2 text-lg font-medium">Que entra en turno</p>
		<p className="mt-2 text-sm leading-6 text-fd-muted-foreground">
			En combate importa el coste de accion. Fuera de combate importa la disponibilidad, los usos restantes y la calidad del material.
		</p>
	</div>
	<div className="rounded-2xl border border-fd-border bg-fd-card p-5">
		<p className="text-xs uppercase tracking-[0.22em] text-fd-muted-foreground">Riesgo</p>
		<p className="mt-2 text-lg font-medium">Que te cobra despues</p>
		<p className="mt-2 text-sm leading-6 text-fd-muted-foreground">
			Cuanto mas rapido o potente sea un consumible, mas probable es que deje fatiga, dolor o secuelas de rendimiento al terminar el efecto.
		</p>
	</div>
</div>

---

## Introducción rápida

En este sistema hay tres familias principales de consumibles médicos:

- **Botiquines**: restauran PV mediante aplicación con material médico.
- **Herramientas de trauma**: controlan estados concretos (<GlossaryTerm to="/docs/01-sistema/glosario/efectos-y-estados#sangrado" term="Sangrado" tooltip="Estado de hemorragia activa que empeora si no se trata." />, <GlossaryTerm to="/docs/01-sistema/glosario/efectos-y-estados#fractura" term="Fractura" tooltip="Lesion o rotura osea que impone penalizadores hasta estabilizacion." />, <GlossaryTerm to="/docs/01-sistema/glosario/efectos-y-estados#laceracion" term="Laceracion" tooltip="Herida profunda que puede seguir causando dano por turno." />).
- **Inyectores**: efectos inmediatos, rápidos de aplicar, con posible coste secundario.

<div className="not-prose my-6 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-5">
	<p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-700 dark:text-amber-300">Criterio de diseño</p>
	<p className="mt-2 text-sm leading-6 text-fd-foreground">
		Si un consumible hace varias cosas a la vez, decide cuál es su identidad principal: curar, estabilizar o empujar rendimiento. Evita objetos que resuelvan las tres sin coste claro.
	</p>
</div>

## Cómo se usan en partida

Cada consumible debe indicar claramente:

- qué cura o estabiliza
- cuánto tarda en hacer efecto
- coste de acción en combate
- dificultad de aplicación (si aplica)
- efectos secundarios o limitaciones

<div className="not-prose my-6 grid gap-3 md:grid-cols-3">
	<div className="rounded-2xl border border-fd-border bg-fd-card/60 p-4">
		<p className="text-xs uppercase tracking-[0.22em] text-fd-muted-foreground">Mayor</p>
		<p className="mt-2 text-sm text-fd-foreground">Cuando usarla implica maniobra, aplicacion precisa o intervencion medica completa.</p>
	</div>
	<div className="rounded-2xl border border-fd-border bg-fd-card/60 p-4">
		<p className="text-xs uppercase tracking-[0.22em] text-fd-muted-foreground">Menor</p>
		<p className="mt-2 text-sm text-fd-foreground">Cuando el objeto esta preparado para uso tactico rapido o autoaplicacion de emergencia.</p>
	</div>
	<div className="rounded-2xl border border-fd-border bg-fd-card/60 p-4">
		<p className="text-xs uppercase tracking-[0.22em] text-fd-muted-foreground">Dificultad</p>
		<p className="mt-2 text-sm text-fd-foreground">No mide solo pericia; tambien mide presion, entorno hostil y estado del paciente.</p>
	</div>
</div>

---

## Botiquines

Uso típico:

- Curan PV por uso.
- Requieren aplicación médica (con o sin tirada, según situación).
- Escalan por calidad: más usos, más curación, menor dificultad.

<div className="not-prose my-5 rounded-2xl border border-fd-border bg-fd-card p-5">
	<p className="text-xs uppercase tracking-[0.22em] text-fd-muted-foreground">Perfil tactico</p>
	<p className="mt-2 text-sm leading-6 text-fd-foreground">
		Son el consumible de desgaste sostenible. No suelen resolver una crisis brutal en el acto, pero son la pieza que mantiene operativo al grupo entre encuentros o durante coberturas breves.
	</p>
</div>

### Ejemplos iniciales

| Nombre | Calidad | Usos | Curación | Dificultad | Acción | Nota |
| --- | --- | --- | --- | --- | --- | --- |
| Medkit civil C-12 | Básica | 3 | 1d6 PV | 15 | Mayor | Barato, común en estaciones |
| Medkit táctico M-4 | Media | 4 | 2d6 PV | 14 | Mayor | Diseñado para combate de escuadra |
| Medkit quirúrgico Aegis | Alta | 2 | 3d6 PV | 13 | Mayor | Coste alto, uso profesional |

Uso recomendado:

- **Civil C-12**: campañas pobres, estaciones, colonias y suministro masivo.
- **Táctico M-4**: unidad de campo, seguridad privada, escuadras preparadas.
- **Aegis**: entornos profesionales, trauma grave o personajes con acceso premium.

---

## Herramientas de trauma

Uso típico:

- No siempre curan PV directo.
- Su función principal es detener deterioro o quitar penalizadores.
- Son clave para estabilizar hasta poder dar tratamiento completo.

<div className="not-prose my-5 rounded-2xl border border-rose-500/20 bg-rose-500/10 p-5">
	<p className="text-xs uppercase tracking-[0.22em] text-rose-700 dark:text-rose-300">Mentalidad de uso</p>
	<p className="mt-2 text-sm leading-6 text-fd-foreground">
		Estas piezas no son lucidas, pero ganan combates. Si un personaje entra en espiral de deterioro, primero se estabiliza y luego se cura. Ese orden importa.
	</p>
</div>

### Ejemplos iniciales

| Nombre | Tipo | Efecto principal | Duración | Acción | Nota |
| --- | --- | --- | --- | --- | --- |
| Vendaje hemostático H-3 | <GlossaryTerm to="/docs/01-sistema/glosario/efectos-y-estados#sangrado" term="Sangrado" tooltip="Estado de hemorragia activa que empeora si no se trata." /> | Detiene <GlossaryTerm to="/docs/01-sistema/glosario/efectos-y-estados#sangrado" term="Sangrado" tooltip="Estado de hemorragia activa que empeora si no se trata." /> | 1d6 turnos | Menor | Solución rápida de campaña |
| Férula modular Kestrel | <GlossaryTerm to="/docs/01-sistema/glosario/efectos-y-estados#fractura" term="Fractura" tooltip="Lesion o rotura osea que impone penalizadores hasta estabilizacion." /> | Suprime penalizador de <GlossaryTerm to="/docs/01-sistema/glosario/efectos-y-estados#fractura" term="Fractura" tooltip="Lesion o rotura osea que impone penalizadores hasta estabilizacion." /> | Hasta retiro | Mayor | Requiere ajuste inicial |
| Torniquete de presión V-lock | <GlossaryTerm to="/docs/01-sistema/glosario/efectos-y-estados#laceracion" term="Laceracion" tooltip="Herida profunda que puede seguir causando dano por turno." /> | Reduce daño de <GlossaryTerm to="/docs/01-sistema/glosario/efectos-y-estados#laceracion" term="Laceracion" tooltip="Herida profunda que puede seguir causando dano por turno." /> a la mitad | 1d6 turnos | Menor | Puede causar <GlossaryTerm to="/docs/01-sistema/glosario/efectos-y-estados#dolor" term="Dolor" tooltip="Penalizacion temporal por trauma o tratamiento invasivo." /> adicional |

Lectura rápida de mesa:

- **Vendaje**: primer gesto de emergencia, rápido y barato.
- **Férula**: inversión de tiempo para devolver funcionalidad.
- **Torniquete**: solución agresiva que compra minutos a costa de sufrimiento o secuelas.

---

## Inyectores

Uso típico:

- Aplicación rápida, generalmente en acción menor.
- Curación o mejora inmediata de rendimiento.
- Riesgo de secundarios en modelos potentes o repetidos.

<div className="not-prose my-5 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5">
	<p className="text-xs uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300">Advertencia</p>
	<p className="mt-2 text-sm leading-6 text-fd-foreground">
		Un inyector debe sentirse como una decision desesperada o muy calculada. Si no hay coste narrativo o tactico posterior, termina sustituyendo a todo lo demas.
	</p>
</div>

### Ejemplos iniciales

| Nombre | Efecto principal | Secundario posible | Acción | Riesgo |
| --- | --- | --- | --- | --- |
| RegenShot Mk-I | +1d6 PV inmediato | <GlossaryTerm to="/docs/01-sistema/glosario/efectos-y-estados#cansado" term="Cansado" tooltip="Penalizador creciente por agotamiento acumulado." /> leve tras 1d6 turnos | Menor | Bajo |
| NeuroStim P-9 | Ignora <GlossaryTerm to="/docs/01-sistema/glosario/efectos-y-estados#dolor" term="Dolor" tooltip="Penalizacion temporal por trauma o tratamiento invasivo." /> durante 1d6 turnos | <GlossaryTerm to="/docs/01-sistema/glosario/efectos-y-estados#desorientacion" term="Desorientacion" tooltip="Desfase sensorial y mental al terminar el efecto estimulante." /> al terminar | Menor | Medio |
| Combat Surge VX | +2 a reflejos durante 1d6 turnos | <GlossaryTerm to="/docs/01-sistema/glosario/efectos-y-estados#fatiga" term="Fatiga" tooltip="Caida brusca del rendimiento tras sobreesfuerzo quimico." /> fuerte y <GlossaryTerm to="/docs/01-sistema/glosario/efectos-y-estados#temblor" term="Temblor" tooltip="Inestabilidad motora que empeora acciones de precision." /> posterior | Menor | Alto |

Escalada sugerida:

- **RegenShot**: recuperacion rapida de emergencia.
- **NeuroStim**: ignorar dolor para rematar una accion clave.
- **Combat Surge**: decision de alto riesgo para romper el equilibrio del encuentro.

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

<div className="not-prose my-6 rounded-2xl border border-fd-border bg-fd-card/70 p-5">
	<p className="text-xs uppercase tracking-[0.22em] text-fd-muted-foreground">Regla practica</p>
	<p className="mt-2 text-sm leading-6 text-fd-foreground">
		Si estas diseñando un consumible nuevo, define primero su escena ideal. Luego decide si esa escena va de sostener, estabilizar o forzar. El resto de numeros deberia reforzar esa fantasia y no competir con ella.
	</p>
</div>

## Reglas de uso en combate y fuera de combate

- En combate, respeta coste de acción y dificultad de aplicación.
- Fuera de combate, el DJ puede simplificar tiradas para acelerar ritmo.
- Pifias y críticos pueden alterar resultado (especialmente botiquines).

Ver también: [Daño y curación](danio-y-curacion.md), [Compendio de drogas](compendio-drogas.md), [Glosario de efectos y estados](glosario/efectos-y-estados.md).


