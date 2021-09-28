require "test_helper"

class CitiesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @city = cities(:one)
  end

  test "should get index" do
    get cities_url
    assert_response :success
  end

  test "should get new" do
    get new_city_url
    assert_response :success
  end

  test "should create city" do
    assert_difference('City.count') do
      post cities_url, params: { city: { armorer: @city.armorer, exportMaterials: @city.exportMaterials, government: @city.government, importMaterials: @city.importMaterials, pointOfInterest1: @city.pointOfInterest1, pointOfInterest2: @city.pointOfInterest2, pointOfInterest3: @city.pointOfInterest3, population: @city.population, race1: @city.race1, race2: @city.race2, race3: @city.race3, region: @city.region, religion1: @city.religion1, religion2: @city.religion2, religion3: @city.religion3, supplies: @city.supplies, weaponsSmith: @city.weaponsSmith } }
    end

    assert_redirected_to city_url(City.last)
  end

  test "should show city" do
    get city_url(@city)
    assert_response :success
  end

  test "should get edit" do
    get edit_city_url(@city)
    assert_response :success
  end

  test "should update city" do
    patch city_url(@city), params: { city: { armorer: @city.armorer, exportMaterials: @city.exportMaterials, government: @city.government, importMaterials: @city.importMaterials, pointOfInterest1: @city.pointOfInterest1, pointOfInterest2: @city.pointOfInterest2, pointOfInterest3: @city.pointOfInterest3, population: @city.population, race1: @city.race1, race2: @city.race2, race3: @city.race3, region: @city.region, religion1: @city.religion1, religion2: @city.religion2, religion3: @city.religion3, supplies: @city.supplies, weaponsSmith: @city.weaponsSmith } }
    assert_redirected_to city_url(@city)
  end

  test "should destroy city" do
    assert_difference('City.count', -1) do
      delete city_url(@city)
    end

    assert_redirected_to cities_url
  end
end
