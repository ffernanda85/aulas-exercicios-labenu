describe("Praticando com Jest", () => {

    test("100 deve ser maior que 99", () => {
      expect(100).toBeGreaterThan(99)
    })
  
    test("100 NÃO deve ser menor que 99", () => {
      expect(100).not.toBeLessThan(99)
    })
  
    test("toBe = dados primitivos", () => {
      expect(true).toBe(true)
      expect(true).toBeTruthy()
      expect(true).not.toBeFalsy()
    })
  
    test("toEqual = objetos e arrays", () => {
      expect(true).toEqual(true)
      expect([]).toEqual([])
      expect({ id: "1" }).toEqual({ id: "1" })
    })
  
    test("toContain e toContainEqual", () => {
      const users = ["Ciclano", "Beltrana"] // array de dados primitivos (strings)
  
      const posts = [ // array de objetos
        { id: "p001", content: "oi" },
        { id: "p002", content: "bananinha" }
      ]
  
      expect(users).toContain("Beltrana")//verifica se users contém a string "Beltrana"
      expect(posts).toContainEqual({ id: "p001", content: "oi" }) // verifica se posts contém o objeto mostrado
    })
    
    /* testa os tamanhos */
    test("toHaveLength", () => {
      expect([1, 2, 3]).toHaveLength(3)
      expect('abc').toHaveLength(3) /* espera que o tamanho seja 3 */
      expect('').not.toHaveLength(5) /* espera que o tamanho seja diferente de 5 */
    })
  })