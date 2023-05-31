import React from 'react';
import s from './SuperButton.module.css'

type SuperButtonType = {
    name?: string
    callBack: () => void
    color?: string
    children?: React.ReactNode
    disabled?: boolean
}

export const SuperButton: React.FC<SuperButtonType> = (props) => {
    const {name, callBack, color, ...restProps} = props

    const onClickHandler = () => {
        callBack()
    }

    /*const finalClassName = s.button
        + (disabled
            ? ' ' + s.disabled
            : color === 'red'
                ? ' ' + s.red
                : color === 'secondary'
                    ? ' ' + s.secondary
                    : ' ' + s.default)
        + (className ? ' ' + className : '')*/

    //const finalClassName = s.button + ' ' + s.red

    //const finalClassName = `  ${ s.button } ${ s.default }  `

    /*const finalClassName = `
    ${s.button}
    ${color === 'red' ? s.red : s.default}
     ${restProps.disabled ? s.disabled : ''} `*/

    const finalClassName = `
    ${s.button} 
    ${color === 'red' ? s.red : color === 'secondary' ? s.secondary : s.default }
     ${restProps.disabled ? s.disabled : ''} `


    return (
        <div>
            <button className={finalClassName} onClick={onClickHandler}> {restProps.children}  </button>
        </div>
    );
};


//----------------------------------------------------------
/*export const SuperButton: React.FC<SuperButtonType> = ({
                                                           name,
                                                           callBack,
                                                           ...props
                                                       }) => {

    const onClickHandler = () => {
        callBack()
    }
    console.log(props.color)
    return (
        <div>
            <button onClick={onClickHandler}> {name}  </button>
        </div>
    );
};*/
//---------------------------------------------------------
/*export const SuperButton = (props: SuperButtonType) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <div>
            <button onClick={onClickHandler}> {props.name}  </button>
        </div>
    );
};*/
