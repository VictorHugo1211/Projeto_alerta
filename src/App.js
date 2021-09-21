import { Notifyer } from './Notifyer';


const App = {
    async start() {
        try {
            await Notifyer.init()
            Notifyer.notify({
                title: 'passou',
                body: 'Mostrou'
            })
        } catch (err) {
            console.log(err.message)
        }
    }
}

export { App }
