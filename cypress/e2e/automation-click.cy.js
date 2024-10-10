describe('clique botoes', () => {

  beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com/challenging_dom');
  })

  it('clicar botoes coloridos', () => {
      cy.get('[class$=button]').click();
      cy.get('[class$=alert]').click();
      cy.get('[class$=success]').click();
      
  })

  it('clicar botoes edit/delete', () => {
        
      (cy.get(':nth-child(1) > :nth-child(7) > [href="#edit"]')).click();
       cy.get(':nth-child(1) > :nth-child(7) > [href="#delete"]').click();
       cy.get(':nth-child(2) > :nth-child(7) > [href="#edit"]').click();
       cy.get(':nth-child(2) > :nth-child(7) > [href="#delete"]').click();
       cy.get(':nth-child(3) > :nth-child(7) > [href="#edit"]').click();
       cy.get(':nth-child(3) > :nth-child(7) > [href="#delete"]').click();
       cy.get(':nth-child(4) > :nth-child(7) > [href="#edit"]').click();
       cy.get(':nth-child(4) > :nth-child(7) > [href="#delete"]').click();
       cy.get(':nth-child(5) > :nth-child(7) > [href="#edit"]').click();
       cy.get(':nth-child(5) > :nth-child(7) > [href="#delete"]').click();
       cy.get(':nth-child(6) > :nth-child(7) > [href="#edit"]').click();
       cy.get(':nth-child(6) > :nth-child(7) > [href="#delete"]').click();
       cy.get(':nth-child(7) > :nth-child(7) > [href="#edit"]').click();
       cy.get(':nth-child(7) > :nth-child(7) > [href="#delete"]').click();
       cy.get(':nth-child(8) > :nth-child(7) > [href="#edit"]').click();
       cy.get(':nth-child(8) > :nth-child(7) > [href="#delete"]').click();
       cy.get(':nth-child(9) > :nth-child(7) > [href="#edit"]').click();
       cy.get(':nth-child(9) > :nth-child(7) > [href="#delete"]').click();
       cy.get(':nth-child(10) > :nth-child(7) > [href="#edit"]').click();
       cy.get(':nth-child(10) > :nth-child(7) > [href="#delete"]').click();
      
  })
    
})