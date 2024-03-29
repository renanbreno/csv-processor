export default class CanalVendaMapper {
    constructor(private readonly canalVenda: string[]) {}

    toObject() {
        const [ id, , enterpriseCode, description, nickName, observation, remark, maestroId ] = this.canalVenda;

        const canalVendaObj =  {
            id: Number(id),
            enterpriseCode: Number(enterpriseCode),
            description,
            nickName,
            observation,
            remark,
            maestroId
        }

        console.log(canalVendaObj)

        return canalVendaObj;
    }
}