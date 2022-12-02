import { Box, BaseInput, MainButton } from './style'
import { createUseStyles } from "react-jss"
import { Link } from 'react-router-dom'

const useStyles = createUseStyles({
	mainBackground: {
		backgroundColor: '#f18c27',
		height: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	registerContainer: {
		margin: '20px 30px',
	}
})

export const Login = () => {
	const classes = useStyles()

	return (
		<div className={classes.mainBackground}>
			<Box>
				<h1>Dev System</h1>
				<BaseInput placeholder="Nome do usuário" />
				<BaseInput type="password" placeholder="Senha" />
				<MainButton>Login</MainButton>
				<div className={classes.registerContainer}>
					<span>Not registered? <Link to='/'>Create an account</Link></span>
				</div>
				{/*https://demos.creative-tim.com/paper-dashboard-pro-react/?_ga=2.69107089.1850803055.1669934421-54909124.1663884087#/admin/dashboard */}
			</Box>
		</div>
	)
}
