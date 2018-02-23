import React from 'react';
import {FormattedMessage} from 'react-intl';

export function serveHowMany(number) {
    return <FormattedMessage id="servePeople" values={{numberPeople: number}} />;
}

export function ingredient({ingredientType, unitType, unitValue}) {
    return {
        id: ingredientType,
        ingredient: <FormattedMessage id={ingredientType} />,
        quantity: <FormattedMessage id={unitType} values={{quantity: unitValue}} />
    };
}

export function instructionCommon({instructionType, time, temperature}) {
    return {
        id: instructionType,
        instruction: <FormattedMessage id={instructionType} values={{time, temperature}} />
    };
}

export function timeMessage({timeType, timeUnit, timeValue}) {
    return {
        id: timeType,
        timeType: <FormattedMessage id={timeType} />,
        timeUnit: <FormattedMessage id={timeUnit} values={{timeQuantity: timeValue}} />
    };
}

export function instruction({instructionType}) {
    return {
        id: instructionType,
        instruction: <FormattedMessage id={instructionType} />
    };
}
