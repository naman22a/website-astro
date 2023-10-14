import { For, Show } from 'solid-js';
import { twMerge } from 'tailwind-merge';
import { setState, state } from '../../store';
import type { Link as ILink } from '../../interfaces';
import { homeRoutes, pageRoutes } from '../../constants';

const Menu = () => {
    return (
        <nav
            class={twMerge(
                'flex flex-col absolute top-20 bg-ctp-surface0 w-full px-4 py-10 text-white items-center justify-center select-none transition-all duration-300 md:hidden',
                state.open ? 'left-0' : 'left-full'
            )}
        >
            <For each={pageRoutes}>{(route) => <Link {...route} />}</For>
            <Show when={window.location.pathname === '/'}>
                <For each={homeRoutes}>{(route) => <Link {...route} />}</For>
            </Show>
        </nav>
    );
};

const Link = (props: ILink) => {
    const { text, href } = props;

    return (
        <a
            href={href}
            class="my-5 text-lg capitalize"
            onClick={() => setState({ open: false })}
        >
            {text}
        </a>
    );
};

export default Menu;
