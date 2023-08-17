import React, {ChangeEvent, useState} from 'react';

const Input = () => {

    const [value, setValue] = useState('');

    const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);

    return <input type="text" value={value} onChange={onChange} />

};

export default Input;