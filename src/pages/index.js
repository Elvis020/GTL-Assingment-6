
const Home = ({ covidCasesInGH }) => {
    return (
        <div className="body">
            <img className="card__photo" width="100px" src={covidCasesInGH.countryInfo.flag} />
            <div className="card__profile">
                <h1>{covidCasesInGH.country}</h1>
                <p>Cases: {covidCasesInGH.cases}</p>
                <p>Deaths: {covidCasesInGH.deaths}</p>
                <p>Recovered: {covidCasesInGH.recovered}</p>
                <p>Active: {covidCasesInGH.active}</p>
            </div>

            <style jsx>{`
                html{
                    background: #333;
                }
                

                .body{
                    margin:5% auto;
                    display:flex;
                    flex-direction: column;
                    width:350px;
                    height:450px;
                    color: #f5f5f5;
                    background:#e64321;
                    text-align: center;
                    font-family: Nunito, sans-serif;
                    font-size: 24px;
                } 
                .card__photo{
                    width:90px;
                    height:90px;
                    border-radius: 50%;
                    margin-left: 36.8%;
                    margin-top: -29px;
                    position: relative
                }
                .card__profile {
                    margin:0 auto;
                }
        `}</style>
        </div>
    );

}

export async function getStaticProps(context) {
    const response = await fetch("https://corona.lmao.ninja/v2/countries/gh");

    return {
        props: {
            covidCasesInGH: await response.json(),
        },
    };
}

export default Home;