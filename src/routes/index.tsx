import { createFileRoute } from "@tanstack/react-router";

import heroImg from "@/assets/aresta-climb-escalador-parede-rocha-hero.jpg";
import croquiImg from "@/assets/aresta-editor-croqui-mesa-maos.jpg";
import { ArestaMark } from "@/components/aresta/Mark";
import { Wordmark } from "@/components/aresta/Wordmark";

const SNAPSHOT = "snapshot 26.08.2026";
const EDITOR_URL = "https://arestaclimb.com/editor";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aresta — croquis de escalada organizados, offline e com autoria" },
      {
        name: "description",
        content:
          "Encontre o pico, entenda o croqui e chegue mais preparado. O Aresta organiza informação de escalada com fonte, data de revisão e crédito de quem construiu.",
      },
      {
        property: "og:title",
        content: "Aresta — croquis de escalada organizados, offline e com autoria",
      },
      {
        property: "og:description",
        content:
          "Aresta Climb para usar no paredão e Aresta Editor para organizar croquis. Explore, conecte, preserve.",
      },
    ],
  }),
  component: Landing,
});

const stats = [
  { value: "25", label: "Croquis publicados" },
  { value: "2.579", label: "Escaladas" },
  { value: "255", label: "Setores" },
  { value: "17", label: "Grupos" },
];

const publicos = [
  {
    n: "01",
    title: "Para quem escala",
    text: "Encontrar o pico, entender o croqui e chegar mais preparado — inclusive sem sinal.",
    cta: "Baixar o Aresta Climb",
    href: "#app",
    accent: "bg-informacao",
  },
  {
    n: "02",
    title: "Para quem mantém",
    text: "Organizar, revisar e divulgar o trabalho mantendo crédito, contexto e controle.",
    cta: "Conhecer o Aresta Editor",
    href: "#editor",
    accent: "bg-territorio",
  },
  {
    n: "03",
    title: "Para quem apoia",
    text: "Entender alcance, legitimidade e como apoiar uma iniciativa útil ao ecossistema.",
    cta: "Falar com o projeto",
    href: "#contato",
    accent: "bg-atencao",
  },
];

const editorPassos = [
  { n: "01", t: "Estruturar dados", d: "Setores, vias, graus e referências em um só lugar." },
  { n: "02", t: "Trabalhar imagens", d: "Fotos da rocha preparadas para virar croqui interativo." },
  { n: "03", t: "Marcar vias", d: "Traços, numeração e informações ligadas à imagem." },
  { n: "04", t: "Preparar publicação", d: "Fonte, autoria, consentimento e data de revisão." },
];

const ciclo = ["Usar", "Registrar", "Autorizar", "Organizar", "Publicar", "Descobrir"];

const afirmamos = [
  "Croquis digitais: organizamos informações das fontes publicadas.",
  "Uso offline: o conteúdo baixado pode ser consultado sem conexão.",
  "Participação: feedbacks e contribuições melhoram a base.",
  "Autoria: fontes, autores e mantenedores são reconhecidos.",
];

const naoPrometemos = [
  "Segurança garantida: rocha, proteções e acessos mudam.",
  "Atualização absoluta: todo dado tem fonte e data de revisão.",
  "Cobertura total: a base é parcial e concentrada em Minas Gerais.",
  "Autorização presumida: publicar exige atribuição e consentimento.",
];

const canais = [
  { t: "Instagram", d: "Descobrir e ver o produto funcionando.", href: "#contato" },
  { t: "WhatsApp", d: "Perguntar, conversar e entrar no beta.", href: "#contato" },
  { t: "Discord", d: "Acompanhar, colaborar e enviar correções.", href: "#contato" },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Ir para o conteúdo
      </a>

      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Wordmark />
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <a className="transition-colors hover:text-foreground" href="#app">
              App
            </a>
            <a className="transition-colors hover:text-foreground" href="#editor">
              Editor
            </a>
            <a className="transition-colors hover:text-foreground" href="#autoria">
              Autoria
            </a>
            <a className="transition-colors hover:text-foreground" href="#comunidade">
              Comunidade
            </a>
          </nav>
          <a
            href="#app"
            className="rounded-sm bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Baixar o app
          </a>
        </div>
      </header>

      <main id="conteudo">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr] lg:items-center">
            <div>
              <p className="meta text-primary">Explore. Conecte. Preserve.</p>
              <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.02] sm:text-5xl lg:text-6xl">
                Encontre o pico, entenda o croqui e chegue mais preparado.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                O Aresta organiza picos, croquis e conhecimento local em uma experiência digital
                prática — inclusive offline. Sem apagar a origem: com fonte, data de revisão e
                crédito de quem construiu.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#app"
                  className="rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Baixar o Aresta Climb
                </a>
                <a
                  href="#editor"
                  className="rounded-sm border border-foreground/25 px-6 py-3 text-sm font-semibold transition-colors hover:bg-accent"
                >
                  Organizar um croqui
                </a>
              </div>
            </div>

            <div className="relative">
              <img
                src={heroImg}
                width={1600}
                height={1200}
                alt="Escalador observando uma grande parede de rocha antes de iniciar a via"
                className="aspect-4/3 w-full rounded-sm object-cover"
              />
              <p className="meta mt-3 text-muted-foreground">
                Documental · Minas Gerais · registro do contexto de uso
              </p>
            </div>
          </div>

          <div className="border-t border-border bg-card">
            <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-5 md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="py-6 md:py-8">
                  <div className="font-display text-3xl font-extrabold md:text-4xl">{s.value}</div>
                  <div className="meta mt-1.5 text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="mx-auto max-w-6xl px-5 pb-6">
              <p className="meta text-muted-foreground">Base publicada · {SNAPSHOT}</p>
            </div>
          </div>
        </section>

        {/* PÚBLICOS */}
        <section className="mx-auto max-w-6xl px-5 py-20">
          <p className="meta text-muted-foreground">Escolha o seu caminho</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
            A mesma base serve a três decisões diferentes
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {publicos.map((p) => (
              <a
                key={p.n}
                href={p.href}
                className="group flex flex-col rounded-sm border border-border bg-card p-7 transition-colors hover:border-foreground/40"
              >
                <span className={`h-1 w-10 ${p.accent}`} />
                <span className="meta mt-6 text-muted-foreground">{p.n}</span>
                <h3 className="mt-2 text-xl font-bold">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.text}
                </p>
                <span className="mt-6 text-sm font-semibold text-primary">
                  {p.cta} <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* APP */}
        <section id="app" className="surface-dark scroll-mt-16">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="meta text-primary">Aresta Climb</p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Baixe o croqui antes de sair. Depois, consulte setores e vias mesmo sem sinal.
              </h2>
              <ul className="mt-8 space-y-4">
                {[
                  ["Encontrar picos", "Busca e picos próximos de onde você está."],
                  ["Consultar croquis", "Croqui interativo sobre a foto da rocha, com setores e vias."],
                  ["Salvar offline", "O conteúdo baixado fica disponível sem conexão."],
                  ["Enviar feedback", "Encontrou algo diferente? Envie uma correção."],
                ].map(([t, d]) => (
                  <li key={t} className="flex gap-4 border-t border-current/15 pt-4">
                    <ArestaMark className="mt-1 h-4 w-5 shrink-0 text-primary" />
                    <span>
                      <span className="font-semibold">{t}</span>
                      <span className="block text-sm opacity-70">{d}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#contato"
                  className="rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Google Play
                </a>
                <a
                  href="#contato"
                  className="rounded-sm border border-current/35 px-6 py-3 text-sm font-semibold transition-colors hover:bg-current/10"
                >
                  App Store
                </a>
              </div>
              <p className="meta mt-5 opacity-60">Beta aberto · {SNAPSHOT}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["1.5 km", "Pico mais próximo"],
                ["Offline", "Croqui salvo no aparelho"],
                ["43 setores", "Organizados por pico"],
                ["Correções", "Enviadas pela comunidade"],
              ].map(([v, l]) => (
                <div key={l} className="rounded-sm border border-current/15 p-6">
                  <div className="font-display text-2xl font-extrabold">{v}</div>
                  <div className="meta mt-1.5 opacity-60">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EDITOR */}
        <section id="editor" className="scroll-mt-16 border-b border-border">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[1fr_1.05fr] lg:items-center">
            <div>
              <img
                src={croquiImg}
                width={1408}
                height={1056}
                loading="lazy"
                alt="Mãos sobre uma mesa segurando um croqui de escalada desenhado à mão, cercado por fotos de paredes de rocha"
                className="aspect-4/3 w-full rounded-sm object-cover"
              />
              <p className="meta mt-3 text-muted-foreground">
                O problema não é o PDF. É a informação perder contexto e continuidade.
              </p>
            </div>

            <div>
              <p className="meta text-primary">Aresta Editor</p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Uma ferramenta só para organizar, revisar e preparar croquis
              </h2>
              <p className="mt-5 text-muted-foreground">
                O Editor reúne em um fluxo único o que hoje está espalhado entre PDFs, fotos e
                conversas. Hoje é uma aplicação local de autoria e gestão de croquis.
              </p>
              <ol className="mt-8 space-y-px">
                {editorPassos.map((p) => (
                  <li
                    key={p.n}
                    className="flex gap-5 border-t border-border py-5 last:border-b"
                  >
                    <span className="meta pt-1 text-primary">{p.n}</span>
                    <span>
                      <span className="font-semibold">{p.t}</span>
                      <span className="block text-sm text-muted-foreground">{p.d}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <a
                href={EDITOR_URL}
                className="mt-8 inline-block rounded-sm bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-opacity hover:opacity-90"
              >
                Abrir o Aresta Editor
              </a>
              <p className="meta mt-4 text-muted-foreground">
                arestaclimb.com/editor · SaaS é direção futura, não descrição atual
              </p>
            </div>
          </div>
        </section>

        {/* CICLO */}
        <section className="mx-auto max-w-6xl px-5 py-20">
          <p className="meta text-muted-foreground">Ciclo de contribuição</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
            Contribuição gera reconhecimento; correção volta para o produto
          </h2>
          <ol className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3 lg:grid-cols-6">
            {ciclo.map((c, i) => (
              <li key={c} className="bg-card p-6">
                <span className="meta text-primary">{String(i + 1).padStart(2, "0")}</span>
                <span className="mt-2 block font-display text-lg font-bold">{c}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* AUTORIA / CONFIANÇA */}
        <section id="autoria" className="scroll-mt-16 border-y border-border bg-card">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <p className="meta text-muted-foreground">Autoria e limites</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
              O conhecimento continua pertencendo a quem o construiu
            </h2>
            <p className="mt-5 max-w-2xl text-muted-foreground">
              O Aresta não apaga a origem. Ele torna a origem visível: fonte, autoria,
              consentimento, data de revisão e contato para correção.
            </p>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <div className="border-t-2 border-acao pt-6">
                <h3 className="meta text-muted-foreground">O que podemos afirmar</h3>
                <ul className="mt-4 space-y-3">
                  {afirmamos.map((t) => (
                    <li key={t} className="text-sm leading-relaxed">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t-2 border-atencao pt-6">
                <h3 className="meta text-muted-foreground">O que não prometemos</h3>
                <ul className="mt-4 space-y-3">
                  {naoPrometemos.map((t) => (
                    <li key={t} className="text-sm leading-relaxed text-muted-foreground">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* COMUNIDADE */}
        <section id="comunidade" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-20">
          <p className="meta text-muted-foreground">Comunidade</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
            Conhece este pico? Ajude a organizar e mantenha o crédito de quem construiu essa
            história.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {canais.map((c) => (
              <a
                key={c.t}
                href={c.href}
                className="rounded-sm border border-border p-7 transition-colors hover:border-foreground/40"
              >
                <h3 className="font-display text-xl font-bold">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </a>
            ))}
          </div>
        </section>

        {/* CTA FINAL */}
        <section id="contato" className="surface-dark scroll-mt-16">
          <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-5 py-20 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="max-w-xl text-3xl font-bold sm:text-4xl">
                A pedra chama. O croqui mostra o caminho.
              </h2>
              <p className="mt-4 max-w-lg opacity-70">
                Entre no beta, teste no seu pico e conte o que faltou. É assim que a base melhora.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="#app"
                className="rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Quero o beta
              </a>
              <a
                href={EDITOR_URL}
                className="rounded-sm border border-current/35 px-6 py-3 text-sm font-semibold transition-colors hover:bg-current/10"
              >
                Sou mantenedor
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between">
          <Wordmark suffix="v3.0" />
          <p className="meta text-muted-foreground">
            arestaclimb.com · Manual de marca 3.0 · dados: {SNAPSHOT}
          </p>
        </div>
      </footer>
    </div>
  );
}
