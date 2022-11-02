import classes from './Footer.module.css';

export const Footer = () => {
	return (
		<div className={classes.wrapper}>
			<p className={classes.author}>
				Created by{' '}
				<a href='mailto:pavel.kodij13@gmail.com'>pavel.kodij13@gmail.com</a>
			</p>
		</div>
	);
};

