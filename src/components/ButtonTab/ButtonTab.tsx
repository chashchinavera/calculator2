import React from 'react';
import Button from '../Button/Button.tsx';

function ButtonTab({ updateResult, cleanResult }) {
    return (
        <div className='buttons'>
            <Button
                children='ac'
                background='grey'
                column='normal'
                updateResult={cleanResult}
            />
            <Button
                children='+/-'
                background='grey'
                column='normal'
                updateResult={updateResult}
            />
            <Button
                children='%'
                background='grey'
                column='normal'
                updateResult={updateResult}
            />
            <Button
                children='÷'
                background='orange'
                column='normal'
                updateResult={updateResult}
            />
            <Button
                children='7'
                background='normal'
                column='normal'
                updateResult={updateResult}
            />
            <Button
                children='8'
                background='normal'
                column='normal'
                updateResult={updateResult}
            />
            <Button
                children='9'
                background='normal'
                column='normal'
                updateResult={updateResult}
            />
            <Button
                children='x'
                background='orange'
                column='normal'
                updateResult={updateResult}
            />
            <Button
                children='4'
                background='normal'
                column='normal'
                updateResult={updateResult}
            />
            <Button
                children='5'
                background='normal'
                column='normal'
                updateResult={updateResult}
            />
            <Button
                children='6'
                background='normal'
                column='normal'
                updateResult={updateResult}
            />
            <Button
                children='-'
                background='orange'
                column='normal'
                updateResult={updateResult}
            />
            <Button
                children='1'
                background='normal'
                column='normal'
                updateResult={updateResult}
            />
            <Button
                children='2'
                background='normal'
                column='normal'
                updateResult={updateResult}
            />
            <Button
                children='3'
                background='normal'
                column='normal'
                updateResult={updateResult}
            />
            <Button
                children='+'
                background='orange'
                column='normal'
                updateResult={updateResult}
            />
            <Button
                children='0'
                background='normal'
                column='double'
                updateResult={updateResult}
            />
            <Button
                children='.'
                background='normal'
                column='normal'
                updateResult={updateResult}
            />
            <Button
                children='='
                background='orange'
                column='normal'
                updateResult={updateResult}
            />
        </div>
    )
};

export default ButtonTab;
