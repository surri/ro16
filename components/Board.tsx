import Image from 'next/image'

const Board = ({
    board,
    dictionary,
}: any) => {
    // const [showNav, setShowNav] = useState(false)
    return (
        <div className="w-full text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl">
            <table className="w-full text-center border-separate border-spacing-y-2">
                <thead>
                    <tr>
                        <th className="pb-2 border-b"><label>{dictionary.team}</label></th>
                        <th className="pb-2 border-b"><label>{dictionary.points}</label></th>
                        <th className="pb-2 border-b"><label>{dictionary.won}</label></th>
                        <th className="pb-2 border-b"><label>{dictionary.drawn}</label></th>
                        <th className="pb-2 border-b"><label>{dictionary.lost}</label></th>
                        <th className="pb-2 border-b"><label>{dictionary.gd}</label></th>
                    </tr>
                </thead>
                <tbody>
                    {board.map((b, index) => {
                        return (
                            <tr key={index.toString()}>
                                <td className="flex flex-col items-center border-b">
                                    <Image
                                        alt="Country flag"
                                        width={24}
                                        // width={128}
                                        height={18}
                                        // height={96}
                                        src={`/flags/${b.Team.Abbreviation.toLowerCase()}.svg`}
                                        layout="fixed"
                                    />
                                    <label className="text-xs font-bold">{b.Team.Abbreviation}</label>
                                </td>
                                <td className="align-top border-b">
                                    <label>{b.Points}</label>
                                </td>
                                <td className="align-top border-b">
                                    <label>{b.Won}</label>
                                </td>
                                <td className="align-top border-b">
                                    <label>{b.Drawn}</label>
                                </td>
                                <td className="align-top border-b">
                                    <label>{b.Lost}</label>
                                </td>
                                <td className="align-top border-b">
                                    <label>{b.GoalsDiference}</label>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Board