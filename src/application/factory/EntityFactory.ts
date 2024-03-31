export default interface EntityFactory {
    processCsv(content: string[]): Promise<void>
}