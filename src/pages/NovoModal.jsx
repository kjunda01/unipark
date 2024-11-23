import styled from 'styled-components';

const FormContainer = styled.div`
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  text-align: center;
`;

const ModalButton = styled.button`
  padding: 10px;
  margin: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ModalCancelButton = styled(ModalButton)`
  background-color: #dc3545;
  &:hover {
    background-color: #c82333;
  }
`;

const FormWithModal = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen); // Abre o modal quando o formulário é enviado
  };

  const handleConfirm = () => {
    alert('Dados confirmados!');
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <h2>Formulário</h2>
          <Input
            type="text"
            name="name"
            placeholder="Nome"
            value={formData.name}
            onChange={handleInputChange}
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <Button type="submit">Enviar</Button>
        </form>
      </FormContainer>

      {isOpen && (
        <ModalBackground>
          <Modal>
            <h3>Confirmar Dados</h3>
            <p>teste</p>
            <ModalButton onClick={handleConfirm}>Confirmar</ModalButton>
            <ModalCancelButton onClick={handleCancel}>Cancelar</ModalCancelButton>
          </Modal>
        </ModalBackground>
      )}
    </div>
  );
};

export default FormWithModal;
