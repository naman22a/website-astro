import { setState, state } from '../../store';
import { twMerge } from 'tailwind-merge';

const Hamburger = () => {
    return (
        <div
            class="ml-auto inline-block md:hidden cursor-pointer scale-75"
            onClick={() => setState({ open: !state.open })}
        >
            <div class="relative h-14 w-14 flex flex-col justify-center gap-3 items-end">
                <span
                    class={twMerge(
                        'h-[3px] w-[40px] bg-white rounded-sm transition-all duration-150',
                        state.open && 'translate-y-5 rotate-45'
                    )}
                ></span>
                <span
                    class={twMerge(
                        'h-[3px] w-[20px] bg-white rounded-sm transition-all duration-150',
                        state.open && 'w-0'
                    )}
                ></span>
                <span
                    class={twMerge(
                        'h-[3px] w-[40px] bg-white rounded-sm transition-all duration-150',
                        state.open && 'translate-y-[-11px] -rotate-45'
                    )}
                ></span>
            </div>
        </div>
    );
};

export default Hamburger;
