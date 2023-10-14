import { For, Show } from 'solid-js';
import { homeRoutes, pageRoutes } from '../../constants';
import type { Link as ILink } from '../../interfaces';

const Links = () => {
    return (
        <nav class="hidden md:inline-block ml-auto font-Hack">
            <div class="flex items-center gap-3">
                <For each={pageRoutes}>{(route) => <Link {...route} />}</For>
                <Show when={window.location.pathname === '/'}>
                    <For each={homeRoutes}>
                        {(route) => <Link {...route} />}
                    </For>
                </Show>
            </div>
        </nav>
    );
};

const Link = (props: ILink) => {
    const { text, href } = props;
    return (
        <a
            href={href}
            class="border-b-transparent border-b-[3px] pb-1 hover:border-b-ctp-green"
        >
            /{text}
        </a>
    );
};

export default Links;
