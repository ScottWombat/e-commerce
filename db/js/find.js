db.products.find().forEach( function( myDoc ) {
    print( "Category name: " + myDoc.categories )
 } )
 