"use strict";
module.exports = (sequelize, DataTypes) => {
  const Donor = sequelize.define(
    "Donor",
    {
      name: DataTypes.STRING,
      identifier: DataTypes.STRING,
      salutationId: DataTypes.INTEGER,
      contactNo: DataTypes.STRING,
      email: DataTypes.STRING,
      donorTypeId: DataTypes.INTEGER,
      donorFrequencyId: DataTypes.INTEGER,
      address: DataTypes.STRING,
      donationStart: DataTypes.DATE,
      preferredContactMode: DataTypes.STRING,
      doNotContact: DataTypes.BOOLEAN,
      comments: DataTypes.STRING
    },
    {}
  );
  Donor.associate = function (models) {
    // associations can be defined here
    Donor.hasMany(models.Donation, {
      foreignKey: 'donorId',
    });
    Donor.hasOne(models.Salutation, {
      sourceKey: "salutationId",
      foreignKey: "id",
      as: "salutation"
    });
    Donor.hasOne(models.DonorFrequency, {
      sourceKey: "donorFrequencyId",
      foreignKey: "id",
      as: "donorFrequency"
    });
    Donor.hasOne(models.DonorType, {
      sourceKey: "donorTypeId",
      foreignKey: "id",
      as: "donorType"
    });
    Donor.hasOne(models.ContactMode, {
      sourceKey: "preferredContactMode",
      foreignKey: "id",
      as: "contactMode"
    });
  };
  return Donor;
};
