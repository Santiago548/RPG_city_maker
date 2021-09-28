require "application_system_test_case"

class CitiesTest < ApplicationSystemTestCase
  setup do
    @city = cities(:one)
  end

  test "visiting the index" do
    visit cities_url
    assert_selector "h1", text: "Cities"
  end

  test "creating a City" do
    visit cities_url
    click_on "New City"

    fill_in "Armorer", with: @city.armorer
    fill_in "Exportmaterials", with: @city.exportMaterials
    fill_in "Government", with: @city.government
    fill_in "Importmaterials", with: @city.importMaterials
    fill_in "Pointofinterest1", with: @city.pointOfInterest1
    fill_in "Pointofinterest2", with: @city.pointOfInterest2
    fill_in "Pointofinterest3", with: @city.pointOfInterest3
    fill_in "Population", with: @city.population
    fill_in "Race1", with: @city.race1
    fill_in "Race2", with: @city.race2
    fill_in "Race3", with: @city.race3
    fill_in "Region", with: @city.region
    fill_in "Religion1", with: @city.religion1
    fill_in "Religion2", with: @city.religion2
    fill_in "Religion3", with: @city.religion3
    fill_in "Supplies", with: @city.supplies
    fill_in "Weaponssmith", with: @city.weaponsSmith
    click_on "Create City"

    assert_text "City was successfully created"
    click_on "Back"
  end

  test "updating a City" do
    visit cities_url
    click_on "Edit", match: :first

    fill_in "Armorer", with: @city.armorer
    fill_in "Exportmaterials", with: @city.exportMaterials
    fill_in "Government", with: @city.government
    fill_in "Importmaterials", with: @city.importMaterials
    fill_in "Pointofinterest1", with: @city.pointOfInterest1
    fill_in "Pointofinterest2", with: @city.pointOfInterest2
    fill_in "Pointofinterest3", with: @city.pointOfInterest3
    fill_in "Population", with: @city.population
    fill_in "Race1", with: @city.race1
    fill_in "Race2", with: @city.race2
    fill_in "Race3", with: @city.race3
    fill_in "Region", with: @city.region
    fill_in "Religion1", with: @city.religion1
    fill_in "Religion2", with: @city.religion2
    fill_in "Religion3", with: @city.religion3
    fill_in "Supplies", with: @city.supplies
    fill_in "Weaponssmith", with: @city.weaponsSmith
    click_on "Update City"

    assert_text "City was successfully updated"
    click_on "Back"
  end

  test "destroying a City" do
    visit cities_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "City was successfully destroyed"
  end
end
