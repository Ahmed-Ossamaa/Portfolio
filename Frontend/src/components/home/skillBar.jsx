import React from "react";
import { skillsIcons } from "../../constants/skills";

const SPEED_SECONDS = 40;

export default function SkillBar() {
    const icons = [...skillsIcons, ...skillsIcons];

    return (
        <div className="w-full py-3 mb-5">
            <div className="max-w-screen-xl mx-auto overflow-hidden">
                <div
                    className="skill-track flex items-center whitespace-nowrap select-none gap-20"
                    role="list"
                >
                    {icons.map((ic, idx) => {
                        const Icon = ic.Comp;

                        return (
                            <div
                                key={`${ic.label}-${idx}`}
                                role="listitem"
                                aria-hidden={idx >= skillsIcons.length}
                                className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 lg:w-[75px] lg:h-[75px]"
                            >
                                <Icon
                                    title={ic.label}
                                    aria-label={ic.label}
                                    className="drop-shadow-md"
                                    style={{ color: ic.color ,width:55,height:40}}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}