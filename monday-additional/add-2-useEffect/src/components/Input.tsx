import React, {RefObject} from 'react';

type InputType = {
    newTitle: RefObject<HTMLInputElement>
    //setNewTitle: (newTitle: string) => void
}

export const Input = (props: InputType) => {

    /* const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
         props.setNewTitle(e.currentTarget.value)
     }*/

    return (
        <input
            /*value={props.newTitle}
            onChange={onChangeHandler}*/
            ref={props.newTitle}

        />
    );
};