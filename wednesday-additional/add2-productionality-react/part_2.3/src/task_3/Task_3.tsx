import {ChangeEvent, memo, ReactNode, useState} from 'react';
import {SlowComponent} from './slowComponent/SlowComponent';
import Input from './Input';


//find the problem and fix it as part of composition optimization, memo, children

//способ-1 - вынести input в отдельную компоненту и так как состояние (useState) вынесено,
// Task_3 не будет ререндерится и задержки при впечатывании в инпут не будет

//способ-2 - обернуть SlowComponent в memo

// export const Task_3 = () => {
//       const [value, setValue] = useState('')
//       const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value)
//
//     return (
//         <div>
//             <div>Lags when change value</div>
//              <input type="text" value={value} onChange={onChange} />
//             {/*<Input/>*/}
//             <SlowComponent/>
//         </div>
//     );
// };

//способ 3 - children

type PropsType = {
    children: ReactNode
}

const Container = (props: PropsType) => {
    const [value, setValue] = useState('')
    const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value)

    return (
        <div>
            <div>Lags when change value</div>
            <input type="text" value={value} onChange={onChange}/>
            {props.children}
        </div>
    )
}

export const Task_3 = () => {
    return (
        <Container>
            <SlowComponent/>
        </Container>
    )
}