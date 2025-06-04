import type { Schema, Struct } from '@strapi/strapi';

export interface AddendaAddenda extends Struct.ComponentSchema {
  collectionName: 'components_addenda_addenda';
  info: {
    displayName: 'Addenda';
    icon: 'typhoon';
  };
  attributes: {
    Description: Schema.Attribute.Text;
  };
}

export interface CaracteristiquesCaracteristiques
  extends Struct.ComponentSchema {
  collectionName: 'components_caracteristiques_caracteristiques';
  info: {
    description: '';
    displayName: 'Caracteristiques';
    icon: 'hashtag';
  };
  attributes: {
    Allee: Schema.Attribute.String;
    Amenagement_du_terrain: Schema.Attribute.String;
    Approvisionnement_en_eau: Schema.Attribute.String;
    Energie_chauffage: Schema.Attribute.String;
    Fenetres: Schema.Attribute.String;
    Fondation: Schema.Attribute.String;
    Foyers_poeles: Schema.Attribute.String;
    Proximite: Schema.Attribute.Component<'proximite.proximite', true>;
    Stationnement: Schema.Attribute.Integer;
    Stationnements: Schema.Attribute.Component<
      'stationnement.stationnement',
      true
    >;
    Systeme_egouts: Schema.Attribute.String;
    Toiture: Schema.Attribute.String;
    Topographie: Schema.Attribute.String;
    Type_de_fenetre: Schema.Attribute.String;
  };
}

export interface EvaluationsTaxesDepensesEvaluationsTaxesDepenses
  extends Struct.ComponentSchema {
  collectionName: 'components_evaluations_taxes_depenses_evaluations_taxes_depenses';
  info: {
    displayName: 'Evaluations_Taxes_Depenses';
    icon: 'hashtag';
  };
  attributes: {
    Annee: Schema.Attribute.BigInteger;
    Evaluation_de_la_batisse: Schema.Attribute.Decimal;
    Evaluation_du_terrain: Schema.Attribute.Decimal;
    Taxes_municipales: Schema.Attribute.Decimal;
    Taxes_scolaires: Schema.Attribute.Decimal;
    Total_evaluation: Schema.Attribute.Decimal;
    Total_taxes: Schema.Attribute.Decimal;
  };
}

export interface ExclusionExclusions extends Struct.ComponentSchema {
  collectionName: 'components_exclusion_exclusions';
  info: {
    displayName: 'Exclusions';
    icon: 'cog';
  };
  attributes: {
    Item: Schema.Attribute.String;
  };
}

export interface FicheDescriptiveFicheDescriptive
  extends Struct.ComponentSchema {
  collectionName: 'components_fiche_descriptive_fiche_descriptives';
  info: {
    description: '';
    displayName: 'Fiche_descriptive';
    icon: 'hashtag';
  };
  attributes: {
    Annee_de_construction: Schema.Attribute.BigInteger;
    Cadastre_du_Quebec: Schema.Attribute.BigInteger;
    Dimension_du_terrain: Schema.Attribute.String;
    Dimensions_du_batiment: Schema.Attribute.Decimal;
    Genre_de_propriete: Schema.Attribute.String;
    Nombre_Chambre: Schema.Attribute.Integer;
    Nombre_piece: Schema.Attribute.Integer;
    Nombre_Salle_de_Bain: Schema.Attribute.Integer;
    Nombre_Salle_Eau: Schema.Attribute.Integer;
    Superficie_du_terrain: Schema.Attribute.String;
    Superficie_habitable: Schema.Attribute.Decimal;
    Type_de_batiment: Schema.Attribute.String;
  };
}

export interface InclusionInclusions extends Struct.ComponentSchema {
  collectionName: 'components_inclusion_inclusions';
  info: {
    displayName: 'Inclusions';
    icon: 'cog';
  };
  attributes: {
    Item: Schema.Attribute.String;
  };
}

export interface NIveauNIveau extends Struct.ComponentSchema {
  collectionName: 'components_n_iveau_n_iveaus';
  info: {
    description: '';
    displayName: 'niveau';
    icon: 'hashtag';
  };
  attributes: {
    Nom: Schema.Attribute.String;
    Piece: Schema.Attribute.Component<'piece.piece', true>;
  };
}

export interface PiecePiece extends Struct.ComponentSchema {
  collectionName: 'components_piece_pieces';
  info: {
    displayName: 'Piece';
    icon: 'hashtag';
  };
  attributes: {
    Dimensions: Schema.Attribute.String;
    Informations_supplementaires: Schema.Attribute.String;
    Nom: Schema.Attribute.String;
    Revetement_de_sol: Schema.Attribute.String;
  };
}

export interface PiecesEtParticularitesExterieuresPiecesEtParticularitesExterieures
  extends Struct.ComponentSchema {
  collectionName: 'components_pieces_et_particularites_exterieures_pieces_et_particularites_exterieures';
  info: {
    displayName: 'Pieces_et_particularites_exterieures';
    icon: 'hashtag';
  };
  attributes: {
    NIveau: Schema.Attribute.Component<'n-iveau.n-iveau', true>;
  };
}

export interface ProximiteProximite extends Struct.ComponentSchema {
  collectionName: 'components_proximite_proximites';
  info: {
    displayName: 'Proximite';
    icon: 'hashtag';
  };
  attributes: {
    Nom: Schema.Attribute.String;
  };
}

export interface StationnementStationnement extends Struct.ComponentSchema {
  collectionName: 'components_stationnement_stationnements';
  info: {
    displayName: 'Stationnement';
    icon: 'cog';
  };
  attributes: {
    Place: Schema.Attribute.Integer;
    Type: Schema.Attribute.String;
  };
}

export interface TypeDeProprieteTypeDePropriete extends Struct.ComponentSchema {
  collectionName: 'components_type_de_propriete_type_de_propriete';
  info: {
    displayName: 'Type de propri\u00E9t\u00E9';
    icon: 'hashtag';
  };
  attributes: {
    Nom: Schema.Attribute.String & Schema.Attribute.Unique;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'addenda.addenda': AddendaAddenda;
      'caracteristiques.caracteristiques': CaracteristiquesCaracteristiques;
      'evaluations-taxes-depenses.evaluations-taxes-depenses': EvaluationsTaxesDepensesEvaluationsTaxesDepenses;
      'exclusion.exclusions': ExclusionExclusions;
      'fiche-descriptive.fiche-descriptive': FicheDescriptiveFicheDescriptive;
      'inclusion.inclusions': InclusionInclusions;
      'n-iveau.n-iveau': NIveauNIveau;
      'piece.piece': PiecePiece;
      'pieces-et-particularites-exterieures.pieces-et-particularites-exterieures': PiecesEtParticularitesExterieuresPiecesEtParticularitesExterieures;
      'proximite.proximite': ProximiteProximite;
      'stationnement.stationnement': StationnementStationnement;
      'type-de-propriete.type-de-propriete': TypeDeProprieteTypeDePropriete;
    }
  }
}
