import { _ } from './Cta.BvZR80B0.js';
import {
  r as u,
  g as y,
  h as S,
  i as g,
  j as k,
  k as E,
  l as b,
  c as w,
  a as t,
  b as D,
  m as P,
  o as v,
  n as N
} from './entry.BxA1UaYp.js';
const I = { class: 'fixed top-0 left-0 w-full h-full overflow-hidden' },
  C = {
    class:
      'opacity-[var(--opacity)] w-full h-full flex items-center justify-center'
  },
  G = t(
    'span',
    {
      class:
        'text-[1rem] secondary max-ds:tracking-tighter ds:text-sm uppercase'
    },
    'ooops',
    -1
  ),
  W = t(
    'p',
    {
      class:
        'primary font-saf-m max-ds:tracking-tighter text-[4rem] ds:text-[12rem] uppercase'
    },
    '4',
    -1
  ),
  M = t(
    'span',
    {
      class:
        'text-[1rem] secondary max-ds:tracking-tighter ds:text-sm uppercase'
    },
    "we're sorry",
    -1
  ),
  j = [G, W, M],
  T = t(
    'div',
    {
      'data-item-content': '',
      class:
        'text-center rounded-full w-[14rem] h-[14rem] ds:w-[28rem] ds:h-[28rem] border border-color flex flex-col justify-between p-[1.2rem] ds:p-30 ds:ml-[1.6rem] flex-shrink-0'
    },
    [
      t(
        'span',
        {
          class:
            'text-[1rem] secondary max-ds:tracking-tighter ds:text-sm uppercase'
        },
        'page not'
      ),
      t(
        'p',
        {
          class:
            'primary font-saf-m max-ds:tracking-tighter text-[4rem] ds:text-[12rem]'
        },
        '0'
      ),
      t(
        'span',
        {
          class:
            'text-[1rem] secondary max-ds:tracking-tighter ds:text-sm uppercase'
        },
        'found'
      )
    ],
    -1
  ),
  B = t(
    'span',
    {
      class:
        'secondary text-[1rem] max-ds:tracking-tighter ds:text-sm uppercase'
    },
    'something',
    -1
  ),
  O = t(
    'p',
    {
      class:
        'primary font-saf-m max-ds:tracking-tighter uppercase text-[4rem] ds:text-[12rem]'
    },
    '4',
    -1
  ),
  $ = t(
    'span',
    {
      class:
        'text-[1rem] secondary max-ds:tracking-tighter ds:text-sm uppercase'
    },
    'is broken',
    -1
  ),
  A = [B, O, $],
  F = {
    __name: '404',
    setup(L) {
      const { transitionState: x } = N(),
        { $gsap: r } = P(),
        n = u(null),
        l = u(null),
        d = y(),
        f = S(),
        m = r.matchMedia(),
        p = 1024,
        h = () => {
          const o = 'power2.in',
            a = 'power2.out',
            s = 1.2000000000000002,
            c = r.timeline({
              delay: 2,
              paused: !0,
              repeat: -1,
              repeatDelay: 0
            });
          c
            .add(
              r.to(n.value, {
                xPercent: -80,
                y: -50,
                rotate: 10,
                ease: a,
                duration: 0.4,
                repeat: -1,
                repeatDelay: s,
                onRepeat() {
                  const e = () => Math.floor(Math.random() * 256);
                  d.setColor([e(), e(), e()], [e(), e(), e()], [238, 238, 238]);
                }
              }),
              0
            )
            .add(
              r.to(n.value, {
                xPercent: 0,
                y: 0,
                rotate: 0,
                ease: o,
                delay: 0.4,
                duration: 0.4,
                repeat: -1,
                repeatDelay: s,
                onStart() {
                  setTimeout(() => {
                    const e = () => Math.floor(Math.random() * 256);
                    d.setColor(
                      [e(), e(), e()],
                      [e(), e(), e()],
                      [238, 238, 238]
                    );
                  }, 0.4);
                }
              }),
              0
            )
            .add(
              r.to(l.value, {
                xPercent: 80,
                y: -50,
                rotate: -10,
                ease: a,
                delay: 0.4 * 2,
                duration: 0.4,
                repeat: -1,
                repeatDelay: s,
                onRepeat() {
                  const e = () => Math.floor(Math.random() * 256);
                  d.setColor([e(), e(), e()], [e(), e(), e()], [238, 238, 238]);
                }
              }),
              0
            )
            .add(
              r.to(l.value, {
                xPercent: 0,
                y: 0,
                rotate: 0,
                ease: o,
                delay: 0.4 * 3,
                duration: 0.4,
                repeat: -1,
                repeatDelay: s
              }),
              0
            ),
            c.play();
        };
      return (
        g(
          () => [f.isLoaded, x.transitionComplete],
          ([i, o], [a, s]) => {
            if (
              (i !== a &&
                r.to(document.documentElement, {
                  '--opacity': 1,
                  duration: 0.5,
                  ease: 'power2.inOut',
                  delay: 1
                }),
              o !== s)
            ) {
              if (!n.value) return;
              m.add(
                {
                  isDesktop: `(min-width: ${p}px)`,
                  isMobile: `(max-width: ${p - 1}px)`
                },
                (c) => {
                  c.conditions,
                    r.set(document.documentElement, {
                      '--color-primary': 'rgb(23, 25, 26)',
                      '--color-secondary': 'rgb(80, 80, 80)',
                      '--color-border': 'rgba(0,0,0,0.2)'
                    }),
                    h();
                }
              );
            }
          }
        ),
        k(() => {
          d.setColor([215, 227, 247], [120, 160, 220], [200, 200, 200]),
            (E().value = !1);
        }),
        b(() => {
          m.revert();
        }),
        (i, o) => {
          const a = _;
          return (
            v(),
            w('section', I, [
              t('div', C, [
                t(
                  'div',
                  {
                    ref_key: 'itemOne',
                    ref: n,
                    'data-item-content': '',
                    class:
                      'text-center rounded-full w-[14rem] h-[14rem] ds:w-[28rem] ds:h-[28rem] border border-color flex flex-col justify-between p-[1.2rem] ds:p-30 flex-shrink-0'
                  },
                  j,
                  512
                ),
                T,
                t(
                  'div',
                  {
                    ref_key: 'itemThree',
                    ref: l,
                    'data-item-content': '',
                    class:
                      'text-center rounded-full w-[14rem] h-[14rem] ds:w-[28rem] ds:h-[28rem] border border-color flex flex-col justify-between p-[1.2rem] ds:p-30 ds:ml-[1.6rem] flex-shrink-0'
                  },
                  A,
                  512
                )
              ]),
              D(
                a,
                {
                  ref: 'link',
                  target: '_self',
                  link: '/',
                  label: 'Back to home',
                  class:
                    'opacity-[var(--opacity)] absolute left-1/2 -translate-x-1/2 bottom-120 max-ds:py-[0.6rem]'
                },
                null,
                512
              )
            ])
          );
        }
      );
    }
  };
export { F as default };
