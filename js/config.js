// Configuração padrão do jogo.
// Dica: ajuste no painel (ESC), clique em "Copiar configuração" e cole o resultado aqui
// para que vire o padrão para todo mundo que abrir o link.
export const CONFIG_PADRAO = {
  // Modelo
  escala: 1.0,                 // o escaneamento já está em metros; mude só se parecer grande/pequeno demais

  // Jogador
  alturaOlhos: 1.6,            // metros acima do chão
  alturaCorpo: 1.7,            // altura da cápsula de colisão
  raio: 0.25,                  // "largura" do jogador (a porta entre sala e cozinha tem ~0,70 m)
  alturaDegrau: 0.22,          // degraus menores que isso são subidos sem pular
  velocidade: 2.2,             // m/s andando
  multCorrida: 1.9,            // Shift
  forcaPulo: 3.6,              // m/s para cima
  gravidade: 18,               // m/s²

  // Nascimento (spawn)
  spawn: { x: -4.2, y: 0.0, z: 0.6 },
  rotacaoInicial: -90,         // graus; -90 = olhando para a cozinha, ao longo da sala

  // Luz
  modoLuz: 'original',         // 'original' (textura do escaneamento) ou 'dinamica'
  toneMapping: 'ACESFilmic',   // 'ACESFilmic' | 'AgX' | 'Neutral' | 'Nenhum'
  exposicaoOriginal: 1.0,
  exposicaoDinamica: 1.0,
  intensidadeHemisferica: 2.2,
  intensidadeDirecional: 1.2,
  sombras: true,
};
