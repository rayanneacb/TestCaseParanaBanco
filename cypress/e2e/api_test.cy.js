// Arquivo: seu_teste_spec.js

describe("Segunda Parte do desafio com cenários de uma API", () => {
    it('CT_004: Acessa o endereço e realiza busca "GET" de um usuário na api', () => {  
      
      const userIdToGet = 1;
      cy.customGetUsers(userIdToGet)
      cy.get('@response').should((response)=>{
        expect(response.status).to.equal(200),        
        expect(response.body.name).to.equal('Leanne Graham')    
        expect(response.body.username).to.equal('Bret')
        expect(response.body.email).to.equal('Sincere@april.biz')    
      })    
    });
    
  
    it('CT_005: Acessar o endereço e realizar requisições "POST" de um novo usuário na api.', () => {
      const newUser = {
        name: 'new user ',
        username: 'newuser',
        email: 'newuser@example.com',
      };
  
      cy.createUser(newUser)
        .then((response) => {
        expect(response.status).to.equal(201); 
        expect(response.body).to.be.an('object');
        expect(response.body.id).to.be.equal(11);//Verifica o novo id
        expect(response.body.name).to.equal(newUser.name);
        expect(response.body.username).to.equal(newUser.username);
        expect(response.body.email).to.equal(newUser.email);
      });
    });
  
    it('CT_006: Acessar o endereço e realizar requisições "PUT" em algum usuário da API.', () => {
      const userId = 5; // Escolha ID do usuário que você deseja atualizar
      const updatedUserData = {
        id: userId,
        name: 'NovoNome',
        username: 'novo_username',
        email: 'novo_email@example.com',
      }; 
        
      cy.updateUser(userId, updatedUserData)
        .then((response) => { // Verifica os dados como ficou o resultado apos as alterações
          expect(response.status).to.equal(200); 
          expect(response.body).to.be.an('object');
          expect(response.body.name).to.equal(updatedUserData.name);
          expect(response.body.username).to.equal(updatedUserData.username);
          expect(response.body.email).to.equal(updatedUserData.email); 
        });
    });
  
    
      it('CT_007: Acessar o endereço e realizar requisições "DELETE" em algum usuário da API.', () => {      
              const userIdToDelete = 5;    // Escolha o id de usuário que deseja deletar 
        cy.deleteUserById(userIdToDelete)
        .then((response) => {
          expect(response.status).to.equal(200); 
        });     
      });  
  });