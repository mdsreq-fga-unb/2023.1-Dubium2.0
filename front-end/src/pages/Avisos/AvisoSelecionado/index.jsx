import "./style.css";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import apiRequest from "../../../services/api";
import handleCurso from "../../../services/curso";

import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import DeleteIcon from "@mui/icons-material/Delete";
import StarIcon from "@mui/icons-material/Star";
import SendIcon from "@mui/icons-material/Send";
import { IconButton } from "@mui/material";

export default function AvisoSelecionado({ usuarios }) {
  const [avisoSelecionado, setAvisoSelecionado] = useState({});
  const [respostas, setRespostas] = useState([]);
  const [favorito, setFavorito] = useState(false);
  const [comentar, setComentar] = useState(false);

  const { idAviso } = useParams();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    apiRequest
      .get(`avisos/${idAviso}`)
      .then((response) => {
        setAvisoSelecionado(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  useEffect(() => {
    apiRequest
      .get(`respostas/aviso/${idAviso}`)
      .then((response) => {
        setRespostas(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [comentar]);

  const deleteAviso = async () => {
    await apiRequest
      .delete(`avisos/${idAviso}`)
      .then(() => {
        alert("Aviso deletado!");
      })
      .catch((error) => console.log(error));

    navigate(-1);
  };

  const updateFavotito = async () => {
    await apiRequest
      .patch(favorito ? `avisos/menos/${idAviso}` : `avisos/${idAviso}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  const onSubmit = async (data) => {
    let novaResposta = {
      id_usuario: data.usuarios,
      id_pergunta: idAviso,
      corpoResposta: data.resposta,
    };

    await apiRequest
      .post("respostas", novaResposta)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

    setComentar(!comentar);
  };

  return (
    <div className="card-pergunta pergunta-selecionada">
      <div className="usuario-informacao-texto">
        <div className="delete">
          {/* <span>{perguntaSelecionada?.usuario?.fotoPerfil}</span> */}
          <span>{avisoSelecionado?.usuario?.nome_completo}</span>
          <IconButton style={{ width: "20" }} onClick={deleteAviso}>
            <DeleteIcon />
          </IconButton>
        </div>
        <span>{handleCurso(avisoSelecionado?.usuario?.curso)}</span>
      </div>
      <span>{avisoSelecionado?.corpoAviso}</span>
      {/* <div className="like-comentario">
        <StarIcon />
        <span>{perguntaSelecionada?.votosTotais} favoritos</span>
      </div> */}
      <ul className="container-interacao">
        <li
          className="item-interacao"
          onClick={() => {
            setFavorito(!favorito);
            updateFavotito();
          }}
        >
          <IconButton>
            <StarIcon className={favorito ? "corFavorito" : ""} />
          </IconButton>
          <span>Favoritar</span>
        </li>
        <li className="item-interacao" onClick={() => setComentar(!comentar)}>
          <IconButton>
            <QuestionAnswerIcon />
          </IconButton>
          <span>Responder</span>
        </li>
      </ul>
      {comentar && (
        <div>
          <form
            action=""
            onSubmit={handleSubmit(onSubmit)}
            className="formulario"
          >
            <select
              name="usuarios"
              {...register("usuarios")}
              style={{ padding: "5px", width: "15%" }}
            >
              {usuarios.map((data, index) => (
                <option
                  value={data.id}
                  key={index}
                  className="opcao-engenharia"
                >
                  {data.nome_completo}
                </option>
              ))}
            </select>
            <div>
              <textarea
                name="resposta"
                {...register("resposta")}
                cols="30"
                rows="2"
                placeholder="Comentar"
                className="comentar"
                maxLength={500}
              ></textarea>
              <IconButton type="submit">
                <SendIcon className="comentario" />
              </IconButton>
            </div>
          </form>
        </div>
      )}
      <ul className="resposta">
        {respostas.map((data, index) => (
          <li value={data.id} key={index} className="teste">
            <div className="usuario-informacao-texto">
              {/* <span>{data.usuario.fotoPerfil}</span> */}
              <span>{data.usuario.nome_completo}</span>
              <span>{handleCurso(data.usuario.curso)}</span>
            </div>
            <span>{data.corpoResposta}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
