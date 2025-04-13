import { classNames } from 'shared/helpers/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames('ldsEllipsis', {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
