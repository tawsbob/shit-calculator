import { concatClass } from '../../helpers';
import styles from './Component.module.scss';

function Default({ className }){
    return (
        <div className={ concatClass(styles.container, className) }>
        </div>
    )
}

Default.defaultProps = {
}

export default Default