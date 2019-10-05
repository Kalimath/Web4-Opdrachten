package controller;

import domain.PersonService;

public class ControllerFactory {
	
    public RequestHandler getController(String key, PersonService model) {
        return createHandler(key, model);
    }
    
	private RequestHandler createHandler(String handlerName, PersonService model) {
		RequestHandler handler = null;
		try {
			System.out.println(handlerName);
			Class<?> handlerClass = Class.forName("controller."+ handlerName);
			Object handlerObject = handlerClass.newInstance();
			handler = (RequestHandler) handlerObject;
	    	handler.setModel(model);
		} catch (Exception e) {
			throw new RuntimeException("Deze pagina bestaat niet!!!!");
		}
		return handler;
	}


}
