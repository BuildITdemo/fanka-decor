import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import classes from './Cards.module.scss';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
}));

const Cards = () => {
    return (
        <div className={classes.container}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Item>
                        <h1>Általános információk</h1>
                        <p>
                            A szójagyertya 100 %-ban növényi alapú viaszból (szójababból) készül, mely nem juttat toxinokat a levegőbe (vegán). A hagyományos gyertyák paraffinból vagy paraffin félékből készülnek melyek kőolajszármazékok, égetésük igen káros az egészségünkre, ugyanazok a toxinok (pl.:benzol, toluol és formaldehid) kerülnek a levegőbe, mint a dízel üzemanyagok égetése során.<br/>
                            A szójaviasz gyertyák tisztán égnek, nem termelnek fekete kormot, ellentétben a kőolaj alapú gyertyákkal, melyek égetése során fekete korom keletkezik, mely ellepheti a függönyöket, szőnyeget, falakat.<br/>
                            A szójaviasz teljesen természetes, megújuló és vegán, szójababból származtatott növényi olaj, mely szobahőmérsékleten szilárd anyaggá alakul. - megújuló és környezetbarát. A szójaviasz a legjobb alternatíva a vegánoknak, és mindannyiunknak, akik környezettudatos és egészséges otthont szeretnének kialakítani.<br/>
                            A szójaviasz sokkal kisebb eséllyel égetheti meg a bőrt, mivel alacsonyabb az olvadáspontja, mint a paraffinnak. A szójaviasz biztonságosabb, ha gyermeked és/vagy háziállatod van.<br/>
                            A szójaviasz gyertya gazdaságosabb hiszen közel kétszer tovább ég, mint a hagyományos gyertyák.<br/>
                            A szójaviasz gyertya illata természetesebb és kellemesebb, mivel a viasz maga tisztább (1000x), mint a paraffin.<br/>
                        </p>
                    </Item>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Item>
                        <h1>Kanóc</h1>
                        <p>A kanóc hármas fonatból áll, fonatonként 15 pamutszállal. 100% tisztaságú pamut kanóc. <br />Talpas kanócot használok a Shell nevű gyertya készítéséhez.A kanóc erős, merev, viaszolt felülete biztosítja azt, hogy öntés közben is stabilan tartsa egyenes formáját.</p>
                    </Item>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Item>
                        <h1>Illat</h1>
                        <p>Megfelelő választás a levendula, ha kedveled nyugtató illatát. Ha frissítő illatra vágysz az erdei gyümölcs pont tökéletes választás. A narancs illat nekem inkább a karácsonyra emlékeztet, de kinek mi. Illetve kérhető még kókusz-vanília változatban is a nyári esti napokra. A téli illat szerelmeseinek kettő féle változat áll rendelkezésre: karácsonyi varázs és karácsonyi fűszerkeverék (fahéj, szegfű, fűszerezett forralt bor).</p>
                    </Item>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Item>xs=6 md=8</Item>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Item>xs=6 md=8</Item>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;