import Star from './Star';
import uniqid from 'uniqid';

export default function Stars({ count = 0 }) {
    const notValid = !Number.isInteger(count) || count > 5 || count < 1;

    return notValid ? null : (
        <ul className='card-body-stars u-clearfix'>
            {[...Array(count)].map(() => (
                <Star key={uniqid()} />
            ))}
      </ul>
    )
}
