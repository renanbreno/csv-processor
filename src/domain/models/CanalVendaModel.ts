export default class CanalVendaModel {
    id: number
    enterpriseCode: number
    description: string
    nickName: string
    observation: string
    remark: string
    maestroId: string

    constructor(private readonly canalVenda) {
        Object.assign(this, this.canalVenda)
    }
}