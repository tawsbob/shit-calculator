import { concatClass } from '../../helpers';
import { money_formatter } from '@/helpers/index.js';
import styles from './Component.module.scss';


function displayLevel(value){

	let level = null

	if(value < 20){
		level = 'ESTAGIÁRIO';
	}

	if(value > 20 && value < 50){
		level = 'JÚNIOR';
	}

	return level
}

function Result({ className, value}){
    return (
        <div className={ concatClass(styles.container, className) }>
        	<h2>Parabés você é</h2>
        	<p>CAGÃO {displayLevel(value)}</p>
        	<p>Você ganha <strong className="green">{ money_formatter.format(value) }</strong> mensais apenas para 💩💩💩💩</p>
        </div>
    )
}

Result.defaultProps = {
}

export default Result