import React, { useState } from 'react'
import './Instructions.scss'
import dataForInstructions from '../../../utils/dataForInstructions'
import { v4 as uuidv4 } from 'uuid'
import headerImg from './notes.svg'
import 'animate.css'

const Instructions = () => {
    const [selected, setSelected] = useState(0)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        return setSelected(i)
    }

    return (
        <div className="wrapper_instructions">
            <div className="aligh-items-left">
                <div className="section_title_experience">
                    To have a better experience
                    <div className="section_title_divider_experience">
                        <div className="solid" />
                    </div>
                </div>
                <div
                    className="section_icon_experience"
                    style={{
                        alignContent: 'center',
                        marginLeft: '6rem',
                        paddingTop: '11rem',
                    }}
                >
                    <img
                        src={headerImg}
                        alt="Header Img"
                        style={{
                            height: '15rem',
                            width: '18rem',
                        }}
                    />
                </div>
            </div>
            <div className="accordion_instructions">
                {dataForInstructions.map((item, idx) => (
                    <div
                        className="item_instructions"
                        onClick={() => toggle(idx)}
                        key={uuidv4()}
                    >
                        <div className="title_instructions">
                            <div className="title_text_instructions">
                                {item.step}
                            </div>
                            <span>{selected === idx ? '-' : '+'}</span>
                        </div>
                        <div
                            className={
                                selected === idx
                                    ? 'content_instructions show'
                                    : 'content_instructions'
                            }
                        >
                            <p>{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Instructions
