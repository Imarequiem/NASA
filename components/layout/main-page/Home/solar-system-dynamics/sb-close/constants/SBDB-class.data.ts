export interface SBDB_ClassInterface {
  name: string,
  description?: string,
}

export const SBDB_Class: SBDB_ClassInterface[] = [
  {
    name: "ATE",
    description: "Aten Near-Earth asteroid orbits similar to that of 2062 Aten (a < 1.0 AU; Q > 0.983 AU)."
  },
  {
    name: "IEO",
    description: "Atira An asteroid orbit contained entirely within the orbit of the Earth (Q < 0.983 AU). Also known as an Interior Earth Object."
  },
  {
    name: "APO",
    description: "Apollo Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo (a > 1.0 AU; q < 1.017 AU)."
  },
  {
    name: "AMO",
    description: "Amor Near-Earth asteroid orbits similar to that of 1221 Amor (1.017 AU < q < 1.3 AU)."
  },
  {
    name: "MCA",
    description: "Mars-crossing Asteroid Asteroids that cross the orbit of Mars constrained by (1.3 AU < q < 1.666 AU; a < 3.2 AU)."
  },
  {
    name: "IMB",
    description: "Inner Main-belt Asteroid Asteroids with orbital elements constrained by (a < 2.0 AU; q > 1.666 AU)."
  },
  {
    name: "MBA",
    description: "Main-belt Asteroid Asteroids with orbital elements constrained by (2.0 AU < a < 3.2 AU; q > 1.666 AU)."
  },
  {
    name: "OMB",
    description: "Outer Main-belt Asteroid Asteroids with orbital elements constrained by (3.2 AU < a < 4.6 AU)."
  },
  {
    name: "TJN",
    description: "Jupiter Trojan Asteroids trapped in Jupiter’s L4/L5 Lagrange points (4.6 AU < a < 5.5 AU; e < 0.3)."
  },
  {
    name: "CEN",
    description: "Centaur Objects with orbits between Jupiter and Neptune (5.5 AU < a < 30.1 AU)."
  },
  {
    name: "PAA",
    description: "Parabolic Asteroid Asteroids on parabolic orbits (e = 1.0)."
  },
  {
    name: "HYA",
    description: "Hyperbolic Asteroid Asteroids on hyperbolic orbits (e > 1.0)."
  },
  {
    name: "HYP",
    description: "Hyperbolic Comet Comets on hyperbolic orbits (e > 1.0)."
  },
  {
    name: "PAR",
    description: "Parabolic Comet Comets on parabolic orbits (e = 1.0)."
  },
  {
    name: "COM",
    description: "Comet Comet orbit not matching any defined orbit class."
  },
  {
    name: "JFC",
    description: "Jupiter-family Comet* Jupiter-family comet, classical definition (P < 20 y)."
  },
  {
    name: "HTC",
    description: "Halley-type Comet* Halley-type comet, classical definition (20 y < P < 200 y)."
  },
  {
    name: "ETc",
    description: "Encke-type Comet Encke-type comet, as defined by Levison and Duncan (Tj > 3; a < aJ)."
  },
  {
    name: "CTc",
    description: "Chiron-type Comet Chiron-type comet, as defined by Levison and Duncan (Tj > 3; a > aJ)."
  },
  {
    name: "JFc",
    description: "Jupiter-family Comet Jupiter-family comet, as defined by Levison and Duncan (2 < Tj < 3)."
  },
]