export default class CanalVenda {
    id: number
    enterpriseCode: number
    description: string
    nickName: string
    observation: string
    remark: string
    maestroId: string

    constructor(private readonly canalVenda) {
    
        Object.assign(this, canalVenda)
    }
}