import React from 'react';
import {Sparklines, SparklinesLine, SparklinesBars, SparklinesReferenceLine} from 'react-sparklines';

function average(inpt) {
    return inpt.reduce((acc, curr) => {return acc + curr}) / inpt.length
}

export default function Chart(props) {
    return (
        <div>
            <Sparklines data={props.data} width={200} height={120}>
                {/*<SparklinesBars style={{stroke: "white", fill: props.color, fillOpacity: ".25"}} />*/}
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>
                Average: {Math.round(average(props.data))} {props.units}
            </div>
        </div>
    );
}