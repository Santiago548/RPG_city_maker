class CreateCities < ActiveRecord::Migration[6.1]
  def change
    create_table :cities do |t|
      t.integer :population
      t.string :environment
      t.string :government
      t.string :importMaterials
      t.string :exportMaterials
      t.string :armorer
      t.string :weaponSmith
      t.string :supplies
      t.string :pointOfInterest1
      t.string :pointOfInterest2
      t.string :pointOfInterest3
      t.string :race1
      t.string :race2
      t.string :race3
      t.string :religion1
      t.string :religion2
      t.string :religion3
      t.string :secret
      t.string :darkSecret

      t.timestamps
    end
  end
end
